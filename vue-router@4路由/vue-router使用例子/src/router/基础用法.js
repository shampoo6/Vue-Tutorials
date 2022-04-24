// 知识点:
// 创建路由的步骤
//        1. 创建 router/index.js 配置
//        2. 在 main.js 中安装插件
//        3. 在页面中添加路由视口 <router-view>
// 使用 <router-link> 跳转 url

import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
// import Page1 from '@/views/Page1.vue';

// 创建 vue-router 的路由器对象
const router = createRouter({
    // 历史模式
    history: createWebHistory(),
    // 路由配置
    // 简单的说路由配置规定了页面上的什么样的url跳转到什么样的组件
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/page1',
            component: () => import('@/views/Page1.vue') // 异步加载页面
            // component: () => Promise.resolve(Page1)
        },
    ]
});

// 导出router
export default router;
