const Crypto = require('crypto-js') // 引入 crypto-js
// 调用 MD5 算法函数 加密一段文本信息
const r = Crypto.MD5('hello world')
console.log(r.toString());