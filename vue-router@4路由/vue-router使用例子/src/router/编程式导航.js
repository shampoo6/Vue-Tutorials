// 知识点：https://router.vuejs.org/zh/guide/essentials/navigation.html
// 什么式编程式导航？
// 应用场景
// push
// replace
// go
// back
// forward


// 什么式编程式导航？
// 使用 js 代码方式来控制页面导航

// 应用场景
// 所有需要用 js 代码控制导航的地方

import {createRouter, createWebHashHistory} from 'vue-router';
import ProgrammingNav from '@/views/编程式导航.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: ProgrammingNav
        },
        {
            path: '/page1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/page2',
            component: () => import('@/views/Page2.vue')
        },
        {
            path: '/home',
            component: () => import('@/views/Home.vue')
        },
    ]
});

export default router;