// 知识点：
// 什么是命名视图
// 应用场景
// 使用方法
//      1. 给路由视口添加 name 属性，没有 name 属性的将被当作 default 使用
//      2. 在路由配置中添加 components 属性，为不同的路由视口添加对应的组件


// 什么是命名视图
// 当一个页面中存在多个路由视口时，需要通过name属性进行区分，这样的视图就叫命名视图

// 应用场景
// 当一个页面足够复杂 由多个路由视口组成，则需要使用命名视图来进行区分

import {createRouter, createWebHashHistory} from 'vue-router';
import NamedViews from '@/views/命名视图.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: NamedViews,
            children: [
                {
                    path: 'namedViews',
                    components: {
                        // 这里的default是给匿名 router-view 提供组件
                        default: () => import('@/views/Page3.vue'),
                        // 下面两个配置对应命名视图的名称
                        view1: () => import('@/views/Page1.vue'),
                        view2: () => import('@/views/Page2.vue')
                    }
                },
                {
                    path: 'namedViews2',
                    components: {
                        // 这里的default是给匿名 router-view 提供组件
                        default: () => import('@/views/Page2.vue'),
                        // 下面两个配置对应命名视图的名称
                        view1: () => import('@/views/Page3.vue'),
                        view2: () => import('@/views/Page1.vue')
                    }
                },
            ]
        },
    ]
});

export default router;
