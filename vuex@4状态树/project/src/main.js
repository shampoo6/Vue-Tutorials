import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/基础使用.js';
// import store from '@/store/getter.js';
// import store from '@/store/mapState和mapActions.js'
// import store from '@/store/表单处理.js'
// import store from '@/store/module.js';
// import store from '@/store/组合式API.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
