// 知识点：
// 什么是嵌套路由？
// 应用场景
// 如何声明嵌套路由
//      1. 路由配置 routes 中，给需要嵌套的路由配置添加 children 属性
//      2. 创建父组件，并在父组件中声明 <router-view>

// 什么是嵌套路由？
// 在一个路由视口中，又包含一个路由视口，这样形成的嵌套效果就是嵌套路由

// 应用场景
// 多用于页面布局时的局部页面切换，例如侧边栏按钮点击后，内容的切换

import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Layout from '@/views/Layout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/layout',
            component: Layout,
            children: [
                {
                    // 注意：子路由的path 建议使用相对路径
                    // 若要访问 Page1.vue 则路径由 父组件 path 加上 子组件 path 得到，例如此处的：/layout/page1
                    path: 'page1',
                    component: () => import('@/views/Page1.vue')
                },
                {
                    path: 'page2',
                    component: () => import('@/views/Page2.vue')
                }
            ]
        }
    ]
});

export default router;
