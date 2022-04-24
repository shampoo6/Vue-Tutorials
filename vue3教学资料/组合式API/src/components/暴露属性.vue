<script setup>
// 知识点：
// 子组件暴露属性给父组件调用

import ExposeChild from '@/components/ExposeChild.vue';
import {ref} from 'vue';

const child = ref(null);

function read() {
  console.log(child.value.a);
  console.log(child.value.b);
  child.value.fn();
}
</script>

<template>
  <div>
    <ExposeChild ref="child"></ExposeChild>
    <button @click="read">读取组件暴露的属性</button>
  </div>
</template>

<style scoped>

</style>