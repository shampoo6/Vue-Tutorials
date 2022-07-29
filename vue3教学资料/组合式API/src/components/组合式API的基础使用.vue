<script setup>


// 知识点
// 什么是组合式API
// 应用场景
// 组合式API的内容应该写在哪里


// 什么是组合式API
// 使用函数形式定义一个组件除模板意外的其他内容，就需要使用组合式API

// 应用场景
// 为了提升vue.js的性能，都可以考虑使用组合式API


import {ref} from 'vue';

const count = ref(0);
const increase = () => {
  count.value++;
};
</script>

<template>
  <div>
    <div>{{ count }}</div>
    <div>
      <button @click="increase">+</button>
    </div>
  </div>
</template>

<!--<script>
import {ref} from 'vue';

export default {
  setup() {
    // ref 的作用是创建响应式属性
    const count = ref(0);

    const increase = () => {
      count.value++; // 响应式属性需要通过value来读写属性
    };

    return {
      count,
      increase
    };
  },
  data() {
    return {};
  }
};
</script>-->

<style scoped>

</style>