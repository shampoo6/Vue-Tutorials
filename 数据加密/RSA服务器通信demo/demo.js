const NodeRSA = require('node-rsa')
// 创建 NodeRSA 加密器的实例对象
// b：加密长度
const key = new NodeRSA({b: 512})
// 创建一对公钥和私钥
key.generateKeyPair(2048, 65537)
// 通过key导出公钥和私钥
const pk = key.exportKey('pkcs1-public')
const sk = key.exportKey('pkcs1-private')

// console.log(pk)
// console.log(sk)

// 通过公钥加密数据
let r = key.encrypt('我爱中国')
console.log(r.toString())

// 通过私钥解密
// decrypt 的参数是一个字符串或buffer对象
r = key.decrypt(r)
console.log(r.toString())
