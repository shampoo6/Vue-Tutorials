import {createRouter, createWebHashHistory} from 'vue-router';
import SignIn from '@/views/SignIn.vue';

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/home',
        component: () => import('@/views/Home.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
