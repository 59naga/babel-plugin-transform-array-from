babel-plugin-transform-array-from
---

<p align="right">
  <a href="https://npmjs.org/package/@59naga/babel-plugin-transform-array-from">
    <img src="https://img.shields.io/npm/v/@59naga/babel-plugin-transform-array-from.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/@59naga/babel-plugin-transform-array-from">
    <img src="http://img.shields.io/travis/59naga/@59naga/babel-plugin-transform-array-from.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/@59naga/babel-plugin-transform-array-from/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/@59naga/babel-plugin-transform-array-from.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/@59naga/babel-plugin-transform-array-from">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/@59naga/babel-plugin-transform-array-from.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/@59naga/babel-plugin-transform-array-from">
    <img src="https://img.shields.io/gemnasium/59naga/@59naga/babel-plugin-transform-array-from.svg?style=flat-square">
  </a>
</p>

Replace `Array.from` with an [ponyfill function](https://github.com/59naga/array-from).

Installation
---
```bash
npm install @59naga/babel-plugin-transform-array-from --save
```

Example
---

**In**

```js
Array.from('👺');
```

**Out**

```js
var _arrayFrom = Array.from || function(){...};
_arrayFrom('👺');
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["@59naga/babel-plugin-transform-array-from"]
}
```

### Via CLI

```bash
$ babel --plugins @59naga/babel-plugin-transform-array-from script.js
```

### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["@59naga/babel-plugin-transform-array-from"]
});
```

Development
---
Requirement global
* NodeJS v0.12.13
* Npm v3.7.1

```bash
git clone https://github.com/59naga/@59naga/babel-plugin-transform-array-from
cd @59naga/babel-plugin-transform-array-from
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
