<script setup>
// 知识点：
// 了解有哪些生命周期钩子函数 https://staging-cn.vuejs.org/api/composition-api-lifecycle.html

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';

const count = ref(0);

onBeforeMount(() => {
  console.log('挂载前');
});

onMounted(() => {
  console.log('挂在完成');
});

onBeforeUpdate(() => {
  console.log('更新前');
});

onUpdated(() => {
  console.log('更新完成');
});

onBeforeUnmount(() => {
  console.log('卸载前');
});

onUnmounted(() => {
  console.log('卸载后');
});

</script>

<template>
  <div>
    <div>{{ count }}</div>
    <div>
      <button @click="count++">+</button>
    </div>
  </div>
</template>

<style scoped>

</style>