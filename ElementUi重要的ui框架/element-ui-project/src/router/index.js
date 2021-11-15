import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/container',
        component: () => import('../views/布局/布局容器.vue')
    },
    {
        path: '/grid',
        component: () => import('../views/布局/网格布局.vue')
    },
    {
        path: '/animation',
        component: () => import('../views/内置动画.vue')
    },
    {
        path: '/formElement',
        component: () => import('../views/表单/表单元素.vue')
    },
    {
        path: '/formValidate',
        component: () => import('../views/表单/表单验证.vue')
    },
    {
        path: '/simpleTable',
        component: () => import('../views/表格/简单表格.vue')
    },
    {
        path: '/pagination',
        component: () => import('../views/表格/分页表格.vue')
    },
    {
        path: '/message',
        component: () => import('../views/结合表格使用消息.vue')
    },
    {
        path: '/dialog',
        component: () => import('../views/对话框.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
