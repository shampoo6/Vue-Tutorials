// 知识点
// 如何声明路由器和路由对象
// 如何声明组件内守卫

import {createRouter, createWebHashHistory} from 'vue-router';
import CombineAPI from '@/views/组合式API.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:id',
            component: CombineAPI
        },
        {
            path: '/page1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/page2',
            component: () => import('@/views/Page2.vue')
        }
    ]
});

export default router;