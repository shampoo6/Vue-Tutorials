// 知识点:
// 给路由配置添加 name 属性
// 使用路由名称实现路由跳转

import {createRouter, createWebHashHistory} from 'vue-router';
import NamedRoute from '@/views/命名路由.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: NamedRoute
        },
        // {
        //     path: '/page3',
        //     name: 'myPage', // 给路由配置取名称
        //     component: () => import('@/views/Page3.vue')
        // },
        {
            path: '/page3/:id',
            name: 'myPage',
            component: () => import('@/views/Page3.vue')
        }
    ]
});

export default router;
