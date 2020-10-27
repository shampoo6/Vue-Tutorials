import Vue from 'vue'
import App from './App.vue'
// import a from './a'
// 单独引入模块中的属性
// import {fn} from './codes/x.js'
// 导入全部属性
// import * as obj from './codes/x.js'
// 导入分批导出的模块
// import {fn, add} from './codes/y.js'
import * as y from './codes/y.js'

// console.log(a)
// console.error('这是我的错误信息')

// fn('你好啊')

// console.log(obj)
// obj.fn('hello china')
// console.log(obj.obj.x)
// console.log(obj.obj.y)

// fn()
// console.log(add(1, 2))

y.fn()
console.log(y.add(5, 7))

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
