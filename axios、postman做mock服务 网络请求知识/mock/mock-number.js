const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
    'list|5': [
        {
            'id|+1': 5, // 1 根据起始值，每次增加1
            'age|16-24': 1, // 2 随机min-max的数字
            'money|0-100.1-3': 1 // 3 随机min-max的浮点数字，小数点后保留1-3位
        }
    ]
})

console.log(data)
