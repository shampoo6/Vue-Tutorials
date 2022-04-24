# es(EcmaScript) 模块化

es 模块 指的时浏览器上的 js 模块

> 注意：es 模块只能在服务器上或支持 es 模块的 node 项目中使用

## 应用场景

复用 js 代码时，可以使用模块化

## 模块声明

es 语法中一个 js 文件就是一个模块

所以声明模块只需要创建一个 js 文件即可

## 导出

- 默认导出 `export default` 一个模块只能导出一个
- 局部导出 `export` 只能一边定义一边导出，或者导出一个声明表statement

## 导入

- 导入默认 `import m from 'path/to/module'`
- 导入局部 `import {a, b} from 'path/to/module'`
- 变量别名 例如
  - `import * as m from 'path/to/module'`
  - `import {a as mA} from 'path/to/module'`

## node.js 中使用 es module

在 package.json 中添加 `"type": "module"`

然后就可以在项目中使用 es module 了

## 浏览器中使用 es module

在 script 标签上添加 `type="module"` 那么 script 标签中就可以使用 es module

> 有时候会看见 `.mjs` 文件，其实这就是 es module 文件
