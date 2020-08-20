const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
    'attr|1': { // 1 从属性值 object 中随机选取 count 个属性。
        a: 1,
        b: 2,
        c: 3
    },
    'attr2|1-2': { // 1 从属性值 object 中随机选取 min 到 max 个属性。
        a: 1,
        b: 2,
        c: 3
    },
})

console.log(data)
