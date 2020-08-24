import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: 'echarts',
                    component: () => import('../views/Echarts')
                },
                {
                    path: 'moment',
                    component: () => import('../views/Moment')
                },
            ]
        },
    ]
})

export default router
