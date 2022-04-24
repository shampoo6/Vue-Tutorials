// 知识点：
// 什么是重定向和别名
// 应用场景
// 配置重定向
// 配置别名


// 什么是重定向？
// 访问一个 url 地址时，被重新要求访问了另一个地址，这个过程是重定向
// 什么是别名？
// 别名是路由的另一个名称

// 应用场景
// 重定向多用于一些地址定向到首页
// 别名多用于简化路径

import {createRouter, createWebHashHistory} from 'vue-router';
import Page1 from '@/views/Page1.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // 使用redirect进行重定向
            // 值可以是字符串的路径
            // redirect: '/page1'
            // 可以使用命名路由
            // redirect: {name: 'p1', params: {id: 'xyz'}}
            // 还可以返回一个工厂函数
            redirect: to => {
                // to 当前被访问的路由对象
                console.log(to);
                // 返回一个重定向路径或命名路由
                // return '/page1/abc';
                return {name: 'p1', params: {id: 'x'}};
            }
        },
        {
            path: '/page1/:id',
            name: 'p1',
            // 给路由添加别名
            alias: '/p1',
            component: Page1
        }
    ]
});

export default router;