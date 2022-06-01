# vue 实现 ssr 原理

## 传统方式实现 ssr

在过去，服务器上会使用一种叫做 `模板引擎` 的工具来实现服务端渲染，如: `java` 服务器上可以使用 `jsp` `freemarker` `thymeleaf`，`node.js` 服务器上可以使用 `ejs` `art-template`，`python` 服务器上可以使用 `djungle`

这些 `模板引擎` 将会使用代码的形式在服务器上动态构建一个 `html` 文件并返回给客户端

## vue 实现 ssr 的原理

vue 实现 ssr 比传统方式稍微复杂一点点，vue 需要在服务器上渲染 html，同时 vue 需要在客户端驱动页面

- 服务端:
    - 使用 vue 渲染页面并返回 html 页面内容
- 客户端:
    - 接受服务端返回的内容
    - 在页面加载 vue
        - 若客户端不加载 vue，页面中的 vue 代码驱动的内容将失效，例如绑定的事件，监听器等等