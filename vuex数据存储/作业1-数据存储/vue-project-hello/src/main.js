import Vue from 'vue'
import App from './App.vue'
// 引入路由配置
import router from './router/index.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 配置router对象
  router,
  store,
  render: h => h(App), // render 函数告诉了vue对象页面张什么样子 但是并没有告诉vue对象 页面该显示到哪个位置
}).$mount('#app') // $mount 函数将告诉vue对象页面内容该插入到哪个位置