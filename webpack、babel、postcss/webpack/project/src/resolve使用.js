// import {a, fn} from '@/module.js'
import {a, fn} from '@/module' // 由于配置了 resolve.extensions 所以此处可以忽略扩展名

console.log(a);
fn()