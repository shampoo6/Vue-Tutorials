const AES = require("crypto-js/aes")
const Crypto = require('crypto-js')

const key = 'hello'
const key2 = 'world'
const text = '你好世界!'
// encrypt 加密函数
// 第一个参数是要加密的内容
// 第二个参数是加密用的密码
let r = AES.encrypt(text, key)
console.log(r.toString());
// 密码不同加密出的结果也不一样
r = AES.encrypt(text, key2)
console.log(r.toString());

r = AES.decrypt(r.toString(), key2)
// 解密结果在输出成字符串时需要指定编码格式对应的编码器
console.log(r.toString(Crypto.enc.Utf8));