import {createApp} from 'vue';
import App from './App.vue';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import AntD from 'ant-design-vue';

createApp(App).use(AntD).use(store).mount('#app');
