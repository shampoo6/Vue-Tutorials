const obj = {
    x: 1,
    y: true,
    z: 'hello'
}
let { z } = obj

const txt = 'hello world'

// 导出指定内容到指定属性
// 使用 export 关键字 导出内容
// 将希望导出的变量名或常量名直接填在花括号中
export {
    obj,
    txt,
    z
}

// 一边声明一边导出
export let a = 'this is a'
export function fn() { }