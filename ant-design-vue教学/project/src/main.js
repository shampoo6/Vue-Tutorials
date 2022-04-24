import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css'; // 引入样式
import Antd from 'ant-design-vue';


createApp(App)
    .use(Antd) // 安装 antd
    .use(router)
    .mount('#app');
