import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'

Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
