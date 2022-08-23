import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/signUp',
            component: () => import('@/views/SignUp')
        },
        {
            path: '/signIn',
            component: () => import('@/views/SignIn')
        },
        {
            path: '/home',
            component: () => import('@/views/Home')
        }
    ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/home') {
        // 判断用户是否已经登录
        if (localStorage['token']) {
            // 已登录
            next()
        } else {
            // 未登录
            next('/signIn')
        }
    } else {
        // 非首页的页面可以直接进入
        next()
    }
})

export default router