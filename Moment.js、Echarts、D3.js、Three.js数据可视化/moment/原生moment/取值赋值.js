const moment = require('moment')

// 设置中文
moment.locale('zh-cn')

// 取值赋值

// 取值

let time = moment()
let year = time.year() // 获取年
console.log(year)
let month = time.month() // 获取月 月份是已0开始计算的
console.log(month)
let day = time.date() // 获取当前月的第几天
console.log(day)
day = time.day() // 获取本周的第几天 是已欧美为准，那么一周的第一天是星期日，day()函数的值为0
console.log(day)
// 测试周日的day函数返回的值
// time = moment('2020-10-04', 'YYYY-MM-DD')
// day = time.day()
// console.log(day)
day = time.dayOfYear() // 获取该time是一年中的第几天
console.log(day)
day = time.weekday() // 作用和day相同
console.log(day)
day = time.daysInMonth() // 获取这个月一共有多少天
console.log(day)
let hour = time.hours()
console.log(hour)
hour = time.hour() // 获取小时 和 hour()函数等价
console.log(hour)
let minute = time.minutes() // 获取分钟 和 minute()函数等价
console.log(minute)
minute = time.minute()
console.log(minute)
let second = time.seconds() // 获取秒 和 second()函数等价
console.log(second)
second = time.second()
console.log(second)
let millisecond = time.milliseconds() // 获取毫秒 和 millisecond()函数等价
console.log(millisecond)
millisecond = time.millisecond()
console.log(millisecond)

// 赋值
time = moment()
time.year(1997) // 给年赋值
time.month(6) // 给月赋值
time.date(1) // 给日赋值
time.hours(1) // 给小时赋值
// time.hours(24) // 可以赋值超过23
// time.hours(-1) // 可以赋值负数
time.minutes(0) // 给分钟赋值
// time.minutes(70) // 可以赋值超过59
// time.minutes(-30) // 可以赋值负数
time.seconds(0) // 和minute赋值方法相同
console.log(time)
