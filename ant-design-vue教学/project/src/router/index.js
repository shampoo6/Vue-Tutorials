import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        // component: () => import('@/views/布局组件.vue')
        // component: () => import('@/views/表单组件.vue')
        // component: () => import('@/views/表单验证.vue')
        // component: () => import('@/views/导航组件.vue')
        // component: () => import('@/views/数据显示组件.vue')
        // component: () => import('@/views/分页表格.vue')
        component: () => import('@/views/反馈组件.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
