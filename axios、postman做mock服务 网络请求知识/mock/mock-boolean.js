const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
    'list|5': [
        {
            'sex|1': true, // 1 随机bool值，true和false概率各一半
            'richMan|1-4': true, // 2 还是min-max的表达式，随机出value的概率占1份，不是value的概率占4份
            'poolMan|4-1': true // 2 还是min-max的表达式，随机出value的概率占4份，不是value的概率占1份
        }
    ]
})

console.log(data)
