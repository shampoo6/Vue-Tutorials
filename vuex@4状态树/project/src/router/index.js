import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/基础使用.vue')
            // component: () => import('@/views/Getter.vue')
            // component: () => import('@/views/mapState和mapActions.vue')
            // component: () => import('@/views/表单处理.vue')
            // component: () => import('@/views/module.vue')
            // component: () => import('@/views/组合式API.vue')
        }
    ]
});

export default router;