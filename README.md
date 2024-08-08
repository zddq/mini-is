# mini-is

Small and Beautiful JS Type Judgment Method Library - 小而美的 JS 类型判断方法库

## 单元测试覆盖率

```js
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.378 s, estimated 1 s
```

## Installation

```bash
# pnpm
pnpm i mini-is

# yarn
yarn add mini-is

# npm
npm i mini-is

# bun
bun install mini-is
```

## Usage

```js
// ESM xxx.js
import { isString } from 'mini-is';
console.log(isString('hello'));

// CJS xxx.js
const { isString } = require('mini-is');
console.log(isString('hello'));

// UMD xxx.html 普通 script 直接导入 -> 访问全局变量 miniIsLib
<script src="https://unpkg.com/mini-is@1.0.0"></script>;
<script>
  console.log("miniIsLib 包对象: ", miniIsLib)
  console.log("miniIsLib.isString('11') 结果: ", miniIsLib.isString("11"))
</script>

// script type module 模块化方式 -> 内部访问全局变量  miniIsLib
<script type="module" src="https://unpkg.com/mini-is@1.0.0"></script>
<script type="module">
  console.log("miniIsLib 包对象: ", miniIsLib)
  console.log("miniIsLib.isString('11') 结果: ", miniIsLib.isString("11"))
</script>

// script type module 模块化内部引入方式
<script type="module">
  import * as miniIsLib from "https://unpkg.com/mini-is@1.0.0/dist/index.esm.js";
  console.log("miniIsLib 包对象: ", miniIsLib)
  console.log("miniIsLib.isString('11') 结果: ", miniIsLib.isString("11"))
</script>
```

## License

MIT
