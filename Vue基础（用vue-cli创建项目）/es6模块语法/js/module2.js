const obj = {
    x: 2,
    y: false,
    z: 'world'
}
let {z} = obj

const txt = 'hello world'

// 导出指定内容到指定属性
// 使用 export 关键字 导出内容
// 将希望导出的变量名或常量名直接填在花括号中
export {
    obj,
    txt,
}

export {
    z
}

// 导出默认内容
// 和 export 不同 可以导出一个json对象
/*export default {
    hello: obj.z,
    txt
}*/

// export default 不限制导出的内容
export default 'abcdefg'

// export default 只能存在一个 而 export 关键字可以存在多个
// export default {
//
// }