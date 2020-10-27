const moment = require('moment')

// 查询

let now = moment()
let otherTime = moment('1999-12-7', 'YYYY-M-D')

// isBefore 判断是否是指定时间之前的时间
// 参数是另一个moment对象
// 返回值位bool值，true代表前一个moment对象的时间在另一个moment对象之前
console.log(otherTime.isBefore(now))
console.log(now.isBefore(otherTime))

// isAfter 判断是否是指定时间之后的时间
// 参数是另一个moment对象
// 返回值位bool值，true代表前一个moment对象的时间在另一个moment对象之后
console.log(otherTime.isAfter(now))
console.log(now.isAfter(otherTime))

// isSame 判断是否和指定时间相同
console.log(otherTime.isSame(now))
let otherTime2 = moment('1999-12-7', 'YYYY-M-D')
// otherTime2.milliseconds(1)
console.log(otherTime.isSame(otherTime2))