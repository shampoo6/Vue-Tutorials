# vue-ssr开发步骤

## 实现一个简单的服务器渲染

先实现一个简单的服务器渲染，参考项目 `vue-no-ssr`

### 第一步: 创建 node 项目并安装依赖

```shell
# 初始项目
npm init -y
# 安装依赖
npm i vue express
```

然后在 `package.json` 中添加 `"type": "module"` 启用 `es` 模块化

### 第二步: 创建服务器文件 `server.js`

```js
// server.js
import express from "express";

const server = express();

server.listen(1024, () => {
  console.log(`server start on: http://127.0.0.1:1024`);
});
```

### 第三步: 创建接口并返回 `html`

```js
// server.js
import express from "express";
// 引入 ssr 必要的依赖
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

const server = express();

// 创建接口拉去网页
server.get("/", (req, res) => {
  // createSSRApp 创建一个服务端渲染的 vue 的 app 对象
  // 类似于 vue 的 createApp 函数, 不过 createSSRApp 是服务端渲染的 app 对象
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `
            <div>
                <div> {{ count }} </div>
                <button @click="count++">+</button>
            </div>
        `,
  });
  // renderToString 将 createSSRApp 创建的 app 对象渲染成一个 html 字符串
  // renderToString 将返回一个 promise 对象
  renderToString(app).then((html) => {
    // 此处 html 参数代表的是渲染完成后的 html 字符串
    res.send(`
        <html>
            <head></head>
            <body>
                <div id="app">${html}</div>
            </body>
        </html>
    `);
  });
});

server.listen(1024, () => {
  console.log(`server start on: http://127.0.0.1:1024`);
});

```

### 第四步: 运行服务器

```shell
# 执行命令行运行服务器
node server.js
```

### 结论

页面被渲染出来，但点击事件并不会执行

> 之所以会这样，是因为点击事件是由 `vue` 的绑定事件所驱动的，然而页面并未加载 `vue`，并且页面也没有 `vue` 的 `app` 实例，所以此时的页面本质上就是个静态页面，完全没有交互功能

## 实现一个服务器渲染项目

参考项目 `vue-ssr-demo`

### 第一步: 创建 app.js

vue 创建的 app 对象需要在前端和服务端共享

所以创建一个 app.js 来创建 app 对象，并共享给前端和服务端

```js
// app.js
import {createSSRApp} from "vue";

// 到处一个工厂函数 createApp 用于创建 vue 的 app 对象
export function createApp() {
  // 创建 vue 的 ssr app
  return createSSRApp({
    data: () => ({
      count: 1
    }),
    template: `
      <div>
      <div>{{ count }}</div>
      <button @click="count++">+</button>
      </div>
    `
  })
}
```

### 第二步: 创建 server.js 服务端代码

```js
import express from 'express'
import {createApp} from "./app.js";
import {renderToString} from 'vue/server-renderer'

const app = express()

// 将整个工程目录作为静态资源文件夹，允许客户端直接访问项目下的 js 文件
app.use(express.static('.'))

app.get('/', (req, res) => {
  renderToString(createApp()).then(html => {
    // 这里很重要，后面马上讲
    res.send(`
      <html>
        <head></head>
        <body>
           <div id="app">${html}</div>
        </body>
        <script type="importmap">
        {
          "imports": {
            "vue": "/node_modules/vue/dist/vue.esm-browser.prod.js"
          }
        }
        </script>
        <script type="module" src="/client.js"></script>
      </html>
    `)
  })
})

app.listen(1024, () => {
  console.log(`server start on: http://127.0.0.1:1024`)
})
```

客户端通过访问 `/` 请求服务器渲染的 `html`，为了让客户端能够在页面能运行 `vue` 程序，我们需要浏览器引入服务器上的 `vue` 模块，所以有了一下代码:

```html
<script type="importmap">
{
    "imports": {
        "vue": "/node_modules/vue/dist/vue.esm-browser.prod.js"
    }
}
</script>
```

首先，`type="importmap"` 的作用，是让浏览器知道，在浏览器上使用 `import` 语句引入模块时，应该映射到服务器的哪个模块

例如，此处的映射关系是 `"vue": "/node_modules/vue/dist/vue.esm-browser.prod.js"` 意思是，如果页面使用 `import {createApp} from 'vue'` 这样的导入语法导入 `vue` 时，导入的是服务器的 `/node_modules/vue/dist/vue.esm-browser.prod.js` 这个文件

然后我们需要引入驱动页面的代码，也就是 `client.js`，如下:

```html
<script type="module" src="/client.js"></script>
```

不过此时还没有创建 `client.js`

### 第三步: 创建 client.js

```js
// client.js
import { createApp } from './app.js'

createApp().mount('#app')
```

内容很简单，导入服务器共享的 `app.js`，并创建 `app` 对象，然后挂在到页面的 `#app` 中

### 第四步: 运行服务器

```shell
# 执行命令行运行服务器
node server.js
```
