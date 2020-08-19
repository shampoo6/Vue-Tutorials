# empty-project
## ElementUi
这是一套Ui框架

#### 安装
```shell script
npm i -S element-ui
```
在入口引入：
```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 常用组件
- 布局容器
- 布局
- 表单
    - 基础表单元素 input select textarea
    - 表单验证
- 对话框
- 消息
- 表格
- 分页
