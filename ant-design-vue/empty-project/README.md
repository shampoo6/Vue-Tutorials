# empty-project
#### 安装ant-design-vue
```shell script
npm i ant-design-vue
```

#### 国际化
在App.vue中，如下引入：
```html
<template>
    <a-config-provider :locale="locale">
            <div id="app">
                <router-view></router-view>
            </div>
        </a-config-provider>
</template>
```
```js
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
    name: 'App',
    data() {
        return {
            locale: zhCN,
        };
    },
}
```

#### 表单

#### 消息

#### 对话框

#### 表格
