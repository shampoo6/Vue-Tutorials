// 知识点
// 什么是路由组件传参
// 应用场景
// 布尔模式
// 命名视图
// 对象模式
// 函数模式
// meta 元数据


// 什么是路由组件传参
// 动态路由匹配的参数可以直接赋值给组件的 props，来达到传参的目的

// 应用场景
// 需要在组件中方便的传递路由参数

import {createRouter, createWebHashHistory} from 'vue-router';
import PassParams from '@/views/路由组件传参.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/pp/:id',
            component: PassParams,

            // meta 属性里面可以存放用户的自定义参数，用户可以通过路由对象来获取meta参数
            // meta 经常用于给导航按钮提供名称和图标
            meta: {name: '张三', sex: 'male', age: 0},

            // 布尔模式配置
            // 当 props 为true时， PassParams 组件中就可以使用 命名为 id 的props 来存储路由参数 :id
            // props: true

        },
        // {
        //     path: '/pp',
        //     // 对象模式
        //     // 对象模式只能传入静态的参数
        //     component: PassParams,
        //     props: {id: 'abc'}
        // },
        {
            path: '/pp',
            // 函数模式
            // 函数模式需要返回一个props对象
            component: PassParams,
            props: route => {
                // 此route就是当前路由对象
                console.log(route);
                // 返回的对象将注入到组件的props中
                return {
                    id: 'xyz',
                    name: '张三'
                };
            }
        },
        {
            path: '/views',
            component: () => import('@/views/命名视图.vue'),
            children: [
                {
                    path: 'show/:id',
                    components: {
                        default: () => import('@/views/Page1.vue'),
                        view1: () => import('@/views/Page2.vue'),
                        view2: () => import('@/views/Page3.vue'),
                    },
                    // 给命名视图分配 props 属性
                    props: {default: true, view1: false, view2: true}
                }
            ]
        }
    ]
});

export default router;