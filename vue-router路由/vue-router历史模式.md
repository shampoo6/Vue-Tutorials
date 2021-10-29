# vue-router 历史模式
vue-router 历史模式允许页面被历史缓存 并使用一个更好看的路径进行访问

## 启用历史模式的方法
> 注意 历史模式 只有在打包部署项目的时候才会生效 平时开发时没有效果

1. 在创建路由对象时 添加 mode 配置
```js
// 创建路由对象时 添加 mode: 'history'
const router = new VueRouter({
  // mode: 'history',
  routes
})
```

2. 打包项目
```batch
# 使用 npm 命令打包
npm run build
```

3. 将输出文件放到服务器的静态资源文件夹下
4. 给express服务器安装解析历史模式的插件
```batch
#服务器项目中安装解析历史模式的插件
npm install connect-history-api-fallback
```
5. 服务器上进行配置
```js
const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback');
const app = express()
const port = 1024

app.use(history())
app.use('/', express.static(path.join(__dirname, '../public')))

app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1:${port}`)
})
```
