import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/signIn',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: 'page1',
                component: () => import('../views/Page1.vue'),
            },
            {
                path: 'page2',
                component: () => import('../views/Page2.vue'),
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 创建路由守卫白名单
const whiteList = [
    '/signIn',
    '/'
]

router.beforeEach((to, from, next) => {
    // 判断要跳转的路径是否是白名单中的路径
    if (whiteList.includes(to.path)) {
        next()
        return
    }

    // 判断是否登录 未登录就跳转到登录页
    if (document.cookie.includes('signInToken')) {
        next()
    } else {
        next('/signIn')
    }
})

export default router
