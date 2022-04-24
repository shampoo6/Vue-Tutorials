import {createRouter, createWebHistory} from 'vue-router';
import SignIn from '@/views/SignIn.vue';

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/signUp',
        component: () => import('@/views/SignUp.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
