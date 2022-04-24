// 知识点
// 什么是导航守卫
// 应用场景
// 全局守卫
// 路由独享守卫
// 组件内守卫  // 组件内守卫请参考 Page3.vue


// 什么是导航守卫
// 导航守卫就是每次路由跳转时都将执行的钩子函数

// 应用场景
// 验证页面权限，没有权限将跳转默认页面（例如：登录验证，没有登录的将被踢回登录页）


import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('@/views/Page2.vue'),
            // 独享路由守卫
            // 写法和 beforeEach 相同
            // beforeEnter: (to, from) => {
            //     console.log(to);
            //     console.log(from);
            //     // return false; // 代表不要跳转，否则请返回 undefined 或 true
            // }
            // 独享路由守卫可以传入多个函数，多个函数形成一个责任链
            beforeEnter: [
                (to, from) => {
                    console.log('第一个守卫');
                },
                (to, from) => {
                    console.log('第二个守卫');
                },
                (to, from) => {
                    console.log('第三个守卫');
                }
            ]
        },
        {
            path: '/page3',
            component: () => import('@/views/Page3.vue')
        },
    ]
});

// 在router的配置文件中添加全局守卫

// 全局守卫
// 前置守卫
// beforeEach 进入任何路由前会触发此回调函数
// router.beforeEach((to, from) => {
//     // to 将要跳转的路由对象
//     // from 从哪个路由对象跳转
//     console.log(to);
//     console.log(from);
//
//     // 若返回 false 代表路由跳转不执行
//     // 若返回 undefined 或 true 代表有效路由，即路由可以正常跳转
//
//     return to.path !== '/page2';
// });


// 可选参数 next
router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    console.log(to);
    console.log(from);

    // 此处的next是个函数，不调用next将无法跳转页面
    if (to.path === '/page2') {
        console.log('跳转page2');
        next();
    } else if (to.path === '/page3') {
        console.log('重定向page2');
        // next 可以填入新的路由地址
        // next('/page2')
        // 参数也可以是命名路由
        next({name: 'page2'});
    }  else {
        console.log('不跳转');
        next(false); // next(false) 代表不跳转
    }
});


// beforeResolve 类似于 beforeEach 但是他将在 组件守卫运行后再运行
// router.beforeResolve((to, from) => {
//     console.log('beforeResolve');
//     console.log(to);
//     console.log(from);
// });

// 后置守卫
// afterEach 将在进入路由页面后触发
router.afterEach((to, from) => {
    console.log('afterEach');
    console.log(to);
    console.log(from);
});

export default router;