import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import ElementUi from 'element-ui' // 引入element-ui

// 安装elementUi
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
