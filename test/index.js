// dependencies
import assert from 'power-assert';
import { transform } from 'babel-core';
import vm from 'vm';

// target
import plugin from '../lib';

// environment
const options = {
  presets: [
    'es2015',
  ],
  plugins: [
    plugin,
    plugin,
    plugin,
  ],
};

// fixtures
const data = [
  {
    code: 'Array.from("")',
    expected: [],
  },
  {
    code: 'Array.from("👺🍣🍕")',
    expected: ['👺', '🍣', '🍕'],
  },
];

// specs
describe('babel-plugin-transform-array-from', () => {
  it('should replace to Array.from polyfill', () => {
    data.forEach((test) => {
      const result = transform(test.code, options);
      const returnValue = vm.runInNewContext(result.code);
      assert.deepEqual(returnValue, test.expected);
    });
  });
});
