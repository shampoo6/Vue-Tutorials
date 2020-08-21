import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import axios from 'axios' // 引入axios
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

console.log(`api服务器地址为：${process.env.VUE_APP_BASE_URL}`)
const _axios = axios.create({baseURL: process.env.VUE_APP_BASE_URL})

Vue.prototype.$axios = _axios

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
