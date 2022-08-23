import {createRouter, createWebHashHistory} from 'vue-router'
import Page1 from '@/views/Page1'
import Users from '@/views/Users'

const routes = [
    {
        path: '/',
        component: Users
    },
    {
        path: '/page1',
        component: Page1
    },
    {
        path: '/page2',
        component: () => import('@/views/Page2')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
