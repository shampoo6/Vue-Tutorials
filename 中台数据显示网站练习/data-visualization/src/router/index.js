import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('../views/Dashboard')
                }
            ]
        }
    ]
})

export default router
