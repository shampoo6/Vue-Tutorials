function fn1() {
    console.log('fn1');
}

function fn2(msg) {
    console.log(msg);
}

let obj = {
    a: 1,
    b: 2
}

let x = 3
let y = 4

// 2. 局部导出
// export 关键字可以用来 一边定义一边导出，或导出一个 statement(声明)
// export 局部导出的内容可以有多个
export let a = 'm1的a' // 定义并导出
export function fn3() {
    console.log(fn3);
}
export { // 导出声明
    obj,
    x
}


// 1. 默认导出
// 默认导出类似于 CommonJs 的 module.exports

// export default "hello world"
export default {
    fn1,
    obj
}

// export default 语句 每个模块只能有一句
// export default "hello 2"