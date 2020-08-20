const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

// 自定义扩展方法
const random = Mock.Random
random.extend({
    class: () => {
        let classes = ['一班', '二班', '三班', '四班', '五班']
        return random.pick(classes)
    }
})

console.log(random.class())

let data = Mock.mock({
    'list|5': [
        {
            name: {
                firstName: '@FIRST', // 通过First函数，获取名称
                middleName: '@FIRST',
                lastName: '@LAST',
                fullName: '@firstName @middleName @lastName' // 通过属性名访问属性
            },
            city: '@province',
            class: '@class'
        }
    ]
})
// const random = Mock.Random
// console.log(random.city(true))

console.log(data.list)
