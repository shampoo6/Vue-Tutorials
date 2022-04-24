const moment = require('moment')

// 设置中文
moment.locale('zh-cn')

// 格式化
let time = moment()

console.log(time.toDate()); // 获取 moment 对应的 Date 对象

// moment().format();
// moment().format(String);

// 格式化方法接收一个 模板参数 pattern，该参数效果类似模板字符串
// 该参数指定将时间格式化成何种样式
// 该方法返回一个格式化完成的字符串

// 2020-10-23 14:36:45
// let YYYY = 2020
// let MM = 10
// let DD = 23
// let templateStr = `${YYYY}-${MM}-${DD}`
// console.log(templateStr)

time.year(2019)
time.month(11)
time.date(5)

let str = time.format('YYYY-MM-DD hh:mm:ss a')

// 常用模板占位符如下：
// YYYY: 占4位长度的年份
// MM: 占2位长度的月份
// DD: 占2位长度的日
// HH: 占2位长度的 24小时计时法的小时
// hh: 占2位长度的 12小时计时法的小时
// a: 如果用12小时计时法，a就是代表上下午
// mm: 占2位长度的分钟
// ss: 占2位长度的秒钟
// x: 小写x 代表格林威治毫秒时
// X: 大写X 代表格林威治秒时

str = time.format('x')

console.log(str)

console.log(new Date(Number(str)))