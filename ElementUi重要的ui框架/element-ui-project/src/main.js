import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element-ui
import elementUi from 'element-ui'
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css'
import './utils/filters.js'

// 安装 element-ui 注册对应的组件你
Vue.use(elementUi)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
