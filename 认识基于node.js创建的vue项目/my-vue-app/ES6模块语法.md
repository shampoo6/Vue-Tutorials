## ES6 模块语法
### 简单的导入导出
```js
// CommonJs 模块语法
const fs = require('fs')
let a = {x:1,y:2}
module.exports = a 

// ES6 模块语法
// 导入语法
// 使用import后面跟上声明的变量名，然后跟上from关键字，最后写上模块名称
import Attr from 'moduleName'

// 导出语法
// 使用export default 跟上要导出的内容
export default obj
```

### 使用export导出对象
```js
// 导出
let a = 0
let b = { x:1, y:2 }
let fn = () => {
    console.log('hello world')
}

export {
    a,
    b,
    fn
}

// 导入单个或多个属性
// 导入多个属性时，使用花括号'{}'，里面加入想要导入的属性名
import {a, fn} from 'module'

// 导入全部属性
// 使用*引入所有属性，并存放到attr变量中，然后就可以使用attr变量访问模块中的属性
import * as attr from 'module'

// 分批导出
// 在一个js文件中，多次使用export关键字进行对象导出，就是分批导出
// 例如
let fn = () => {
    console.log('greeting')
}

// 分批导出
export {
    fn
}

let add = (x, y) => {
    return x + y
}

// 分批导出
export {
    add
}

// 分批导出的模块，导入方法和只使用一个export导出的模块一样
```