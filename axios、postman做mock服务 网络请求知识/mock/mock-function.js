const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
    'list|5': [
        {
            'random': () => {
                return Math.random()
            }
        }
    ]
})

console.log(data)
