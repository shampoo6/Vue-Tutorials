const express = require('express');
const path = require('path')
const app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

app.use('/a', express.static(path.join(__dirname, '../a')))
app.use('/b', express.static(path.join(__dirname, '../b')))

app.listen(1024, () => {
    console.log('server start')
})
