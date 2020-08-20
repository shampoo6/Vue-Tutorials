## Mock.js
Mock.js是用来按一定规则创建模拟数据的工具，通常被用来模拟服务器的数据

#### 安装
```shell script
npm i mockjs
```
然后通过require引入即可
```js
const Mock = require('mockjs')
```

#### 使用
```js
const Mock = require('mockjs')
let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```

#### 语法
- 基本语法

<b>数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值</b>
```
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```

- 生成规则和示例
    - 属性值是字符串 String
        1. 'name|min-max': string
        
        通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
        
        2. 'name|count': string
        
        通过重复 string 生成一个字符串，重复次数等于 count。

    - 属性值是数字 Number
        1. 'name|+1': number
        
        属性值自动加 1，初始值为 number。
        
        2. 'name|min-max': number
        
        生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
        
        3. 'name|min-max.dmin-dmax': number
        
        生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
        ```js
        Mock.mock({
            'number1|1-100.1-10': 1,
            'number2|123.1-10': 1,
            'number3|123.3': 1,
            'number4|123.10': 1.123
        })
        // =>
        {
            "number1": 12.92,
            "number2": 123.51,
            "number3": 123.777,
            "number4": 123.1231091814
        }
        ```

    - 属性值是布尔型 Boolean
        1. 'name|1': boolean
        
        随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
        
        2. 'name|min-max': value
        
        随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
        
    - 属性值是对象 Object
        1. 'name|count': object
        
        从属性值 object 中随机选取 count 个属性。
        
        2. 'name|min-max': object
        
        从属性值 object 中随机选取 min 到 max 个属性。

    - 属性值是数组 Array
        1. 'name|1': array
        
        从属性值 array 中随机选取 1 个元素，作为最终值。
        
        2. 'name|+1': array
        
        从属性值 array 中顺序选取 1 个元素，作为最终值。
        
        3. 'name|min-max': array
        
        通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
        
        4. 'name|count': array
        
        通过重复属性值 array 生成一个新数组，重复次数为 count。

    - 属性值是函数 Function
        1. 'name': function
        
        执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。

    - 属性值是正则表达式 RegExp
        1. 'name': regexp
        
        根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
        ```js
        Mock.mock({
            'regexp1': /[a-z][A-Z][0-9]/,
            'regexp2': /\w\W\s\S\d\D/,
            'regexp3': /\d{5,10}/
        })
        // =>
        {
            "regexp1": "pJ7",
            "regexp2": "F)\fp1G",
            "regexp3": "561659409"
        }
        ```

- 占位符 @
    - 占位符的最终值会使用<b>占位符函数</b>(Mock.Random函数)替换掉占位符本身，就和名字一样它只是个占位用的    
    
    Mock.Random函数有以下种类，官方地址：https://github.com/nuysoft/Mock/wiki/Mock.Random
    
    Type |	Method
    --- | ---
    Basic |	boolean, natural, integer, float, character, string, range, date, time, datetime, now
    Image |	image, dataImage
    Color |	color
    Text |	paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
    Name |	first, last, name, cfirst, clast, cname
    Web |	url, domain, email, ip, tld
    Address |	area, region
    Helper |	capitalize, upper, lower, pick, shuffle
    Miscellaneous |	guid, id

    - 扩展占位符
    ```js
    Random.extend({
        constellation: function(date) {
            var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
            return this.pick(constellations)
        }
    })
    Random.constellation()
    // => "水瓶座"
    Mock.mock('@CONSTELLATION')
    // => "天蝎座"
    Mock.mock({
        constellation: '@CONSTELLATION'
    })
    // => { constellation: "射手座" }
    ```
