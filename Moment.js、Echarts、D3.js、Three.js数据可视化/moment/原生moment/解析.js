// 引入moment.js
const moment = require('moment')

// 设置中文
moment.locale('zh-cn')

// 解析

// 获取系统当前时间
let now = moment()
console.log(now)

// 通过字符串解析时间
let timeStr = '2020/08/09 16:05'
// 使用pattern模板 让moment.js指导timeStr中每一个数字单表什么时间
let pattern = 'YYYY/MM/DD HH:mm' // 声明一个时间格式模板
// 使用moment方法构造时间对象
let timeObj = moment(timeStr, pattern)
console.log(timeObj)

// 通过格林威治1970毫秒数字获取时间
let timeNumber = 1603423903378
timeObj = moment(timeNumber)
console.log(timeObj)

// 通过Date对象获取时间
let date = new Date()
timeObj = moment(date)
console.log(timeObj)