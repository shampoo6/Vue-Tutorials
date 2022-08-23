import {createRouter, createWebHashHistory} from 'vue-router'
import Goods from '@/views/Goods'

const routes = [
    {
        path: '/',
        component: Goods
    },
    {
        path: '/shoppingCar',
        component: () => import('@/views/ShoppingCar')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
