import {createApp, ref} from 'vue';
import App from './App.vue';
// 引入组件
// 路径中的 @ 代表 src 目录
import TestComponent from '@/components/TestComponent';


const app = createApp(App);
// 让响应式属性自动解包
app.config.unwrapInjectedRef = true;

// 全局注册
// 全局注册的组件在任意位置都能使用
// 注意：全局注册要写在挂载之前
// 第一个参数：组件名，使用组件时的标签名称
// 第二个参数：组件配置对象
app.component('TestComponent', TestComponent);

window.attr = ref('some value')

// 应用层 Provide
app.provide('attr', window.attr);

app.mount('#app');