<template>
  <div>
    <AsyncComponent></AsyncComponent>
  </div>
</template>

<script>

// 知识点：
// 什么是异步组件？
// 应用场景
// 声明异步组件


// 什么是异步组件？
// 异步组件用于异步加载，并非页面打开立即加载，只有当使用该组件时才会加载
// 应用场景
// 只要不是打开页面时立即需要加载的内容，都可以成为异步组件
// 特别常见的一个异步组件的应用场景就是配合 vue-router 实现页面懒加载


// 声明一个异步组件
import {defineAsyncComponent} from 'vue';
// import AC from '@/components/AsyncComponent.vue';

let AsyncComponent = defineAsyncComponent(() => {
  // 函数内返回一个promise对象
  // return new Promise(resolve => {
  //   // resolve 一个组件的配置
  //   resolve(AC);
  // });
  // return Promise.resolve(AC);

  // 通过import函数，引入并返回promise对象
  return import('@/components/AsyncComponent.vue');
});


export default {
  components: {
    AsyncComponent
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>