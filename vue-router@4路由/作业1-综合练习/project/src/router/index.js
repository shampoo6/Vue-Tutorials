import {createRouter, createWebHashHistory} from 'vue-router/dist/vue-router'
import Home from '@/pages/HomePage'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/page1',
            component: () => import('@/pages/PageOne')
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('@/pages/PageTwo'),
            children: [
                {
                    path: 'child',
                    components: {
                        v1: () => import('@/pages/POne'),
                        v2: () => import('@/pages/PTwo')
                    }
                }
            ]
        },
        {
            path: '/page3/:name',
            component: () => import('@/pages/PageThree'),
            props: true,
            children: [
                {
                    path: 'child',
                    components: {
                        v1: () => import('@/pages/PTwo'),
                        v2: () => import('@/pages/POne'),
                    }
                }
            ]
        }
    ]
})

export default router