const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
    'bookname|5-10': 'book', // 1 重复min-max 次 value的值
    'author|3': 'sham' // 2 重复指定次数 value的值
})

console.log(data)
