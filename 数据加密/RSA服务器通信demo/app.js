const express = require('express')
const path = require('path')
const app = express()
const port = 80
const NodeRSA = require('node-rsa')


// 创建密钥
// 创建 NodeRSA 加密器的实例对象
// b：加密长度
const key = new NodeRSA({b: 512})
// 创建一对公钥和私钥
key.generateKeyPair(2048, 65537)
// 通过key导出公钥和私钥
const pk = key.exportKey('pkcs1-public')

app.use('/', express.static(path.join(__dirname, './public')))

app.use(express.json())

// 获取公钥
app.post('/getPk', (req, res) => {
    res.json({pk})
})

// 解密信息
app.post('/decrypt', (req, res) => {
    const {r} = req.body
    // 解密
    const msg = key.decrypt(Buffer.from(r.data))
    res.json({msg: msg.toString()})
})

app.listen(port, () => {
    console.log('server start on: http://127.0.0.1')
})
