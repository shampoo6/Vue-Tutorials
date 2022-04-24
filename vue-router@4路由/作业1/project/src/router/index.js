import {createRouter, createWebHistory} from 'vue-router';
import Layout from '@/views/Layout.vue';

const routes = [
    {
        path: '/',
        redirect: '/page1'
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'page1',
                redirect: '/page1/art1'
            },
            {
                path: 'page1',
                component: () => import('@/views/Page1.vue'),
                children: [
                    {
                        path: 'art1',
                        component: () => import('@/views/Art1.vue')
                    },
                    {
                        path: 'art2',
                        component: () => import('@/views/Art2.vue')
                    },
                    {
                        path: 'art3',
                        component: () => import('@/views/Art3.vue')
                    },
                ]
            },
            {
                path: 'page2',
                component: () => import('@/views/Page2.vue')
            },
            {
                path: 'page3',
                component: () => import('@/views/Page3.vue')
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
