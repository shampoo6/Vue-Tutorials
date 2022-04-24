const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const app = express()
const port = 1024

// 安装模块 connect-history-api-fallback

// 引入并安装中间件
// 请将中间件放在所有请求的前面
app.use(history())

app.use('/', express.static(path.join(__dirname, './public/dist')))

app.listen(port, ()=>{
    console.log(`server start on: http://127.0.0.1:${port}`);
})