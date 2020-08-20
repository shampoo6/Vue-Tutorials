const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
    'list|5': [
        {
            'department|1': [ // 1 从属性值 array 中随机选取 1 个元素，作为最终值。
                'IT',
                'HR',
                'MONEY'
            ],
            'department2|+1': [ // 2 从属性值 array 中顺序选取 1 个元素，作为最终值。
                'IT',
                'HR',
                'MONEY'
            ],
            'department3|1-3': [ // 3 通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
                'IT',
                'HR',
                'MONEY'
            ],
            'department4|2': [ // 4 通过重复属性值 array 生成一个新数组，重复次数为 count。
                'IT',
                'HR',
                'MONEY'
            ]
        }
    ]
})

console.log(data)
