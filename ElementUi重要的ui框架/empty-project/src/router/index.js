import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '../views/Layout'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/layout',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('../views/EmptyPage')
                },
                {
                    path: 'page1',
                    name: 'page1',
                    component: () => import('../views/Page1')
                },
                {
                    path: 'page3',
                    name: 'page3',
                    component: () => import('../views/Page3')
                },
                {
                    path: 'table',
                    name: 'table',
                    component: () => import('../views/Table')
                }
            ]
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
