import {createApp} from 'vue';
import App from './App.vue';
// import router from '@/router/基础用法.js'; // 导入router
// import router from '@/router/路由懒加载.js';
// import router from '@/router/动态路由匹配.js';
// import router from '@/router/嵌套路由.js';
// import router from '@/router/编程式导航.js';
// import router from '@/router/命名路由.js';
// import router from '@/router/命名视图.js';
// import router from '@/router/重定向和别名.js';
// import router from '@/router/路由组件传参.js';
// import router from '@/router/历史模式.js';
import router from '@/router/导航守卫.js';
// import router from '@/router/组合式API.js';
// import router from '@/router/动态路由.js';

const app = createApp(App);

// 安装插件
app.use(router);

app.mount('#app');
