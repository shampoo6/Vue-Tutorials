import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const _axios = axios.create({baseURL: 'http://127.0.0.1:7300/mock/5f3dde21df570b259c2d7145/vue-pro'})

Vue.prototype.$axios = _axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
