import {createApp} from 'vue';
import App from './App.vue';
import MyPlugin from './我的插件.js';

const app = createApp(App);

// 在mount之前安装插件
// 第一个参数：插件
// 第二个参数：配置参数options
app.use(MyPlugin, {name: '张三', sex: 'male'});

app.mount('#app');

window.$app = app;
