import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/signIn',
        component: () => import('@/views/SignIn')
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        // children: [
        //     {
        //         path: 'page1',
        //         component: () => import('@/views/Page1')
        //     },
        //     {
        //         path: 'page2',
        //         component: () => import('@/views/Page2')
        //     },
        //     {
        //         path: 'page3',
        //         component: () => import('@/views/Page3')
        //     },
        // ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
