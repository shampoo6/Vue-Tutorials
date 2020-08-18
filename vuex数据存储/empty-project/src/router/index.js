import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About')
        }
    ]
})

export default router
