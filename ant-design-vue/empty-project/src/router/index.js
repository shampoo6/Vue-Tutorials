import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/layout'
        },
        {
            path: '/layout',
            component: () => import('../views/Layout'),
            children: [
                {
                    path: 'ucenter',
                    name: 'ucenter',
                    component: () => import('../views/UserCenter')
                },
                {
                    path: 'table',
                    name: 'table',
                    component: () => import('../views/Table')
                },
            ]
        }
    ]
})

export default router
