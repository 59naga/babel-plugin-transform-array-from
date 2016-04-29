// dependencies
import template from 'babel-template';
import fs from 'fs';

// private
const polyfill = fs.readFileSync(require.resolve('array-from/polyfill.js'), 'utf8');
const polyfillWithoutExport = polyfill.slice(polyfill.indexOf('('));
const defineName = '_arrayFrom';

/**
* @module babel-plugin-transform-array-from
* @returns {babelPlugin} unknown
*/
export default () => ({
  visitor: {
    CallExpression(path) {
      if (path.get('callee').matchesPattern('Array.from')) {
        path.replaceWith(template(`${defineName}($0)`)(path.node.arguments));
      }
    },
    Program: {
      exit(path) {
        for (const node of path.node.body) {
          const declaration = (node.declarations || [])[0] || {};
          const name = declaration.id && declaration.id.name;
          if (name === defineName) {
            return;
          }
        }

        const topNodes = [];
        topNodes.push(template(`var ${defineName} = Array.from || ${polyfillWithoutExport}`)());
        path.unshiftContainer('body', topNodes);
      },
    },
  },
});
