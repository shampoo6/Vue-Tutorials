const moment = require('moment')

// 设置中文
moment.locale('zh-cn')

// 时间的加减法
let time = moment()
// m.add(-1, 'y')
// console.log(m)
// m.subtract(2, 'y')


// 完整单位名  单位名缩写
// years	y 年
// quarters	Q 季度
// months	M 月
// weeks	w 周
// days	d     天
// hours	h 小时
// minutes	m 分钟
// seconds	s 秒
// milliseconds	ms 毫秒

// 时间加法
// 第一个参数：要加的时间值
// 第二个参数：时间的单位
// time.add(1, 'years')
// time.add(1, 'quarters')
// time.add(1, 'w')
// time.add(10, 'days')
time.add(-10, 'days') // 设置负数，时间会倒退
console.log(time)

time = moment()
// 减法
// 此处参数和加法一样
// time.subtract(5, 'years')
// time.subtract(12, 'months')
time.subtract(-5, 'months') // 设置负数，时间会前进
console.log(time)