// 知识点：
// 什么是动态路由匹配
// 应用场景
// 使用方法
// this.$route


// 什么是动态路由匹配？
// 通过不同的 url 路径可以跳转到同一个页面，这种 path 的设置方法就是动态路由匹配

// 应用场景
// 同一个页面可以通过不同的 url 来获取参数，从而显示不同的内容，例如：b站的用户中心，直播间，京东的商品详情页等

import {createWebHashHistory, createRouter} from 'vue-router';
import User from '@/views/User.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // :id 是 url 上的占位符 在输入地址时，可以填入任意内容
            path: '/user/:id/age/:age',
            component: User
        }
    ]
});

export default router;
