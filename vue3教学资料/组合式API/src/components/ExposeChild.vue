<script setup>
import {ref, defineExpose} from 'vue';

const a = ref('hello');
const b = ref('world');

function fn() {
  console.log('this is fn');
}

// 暴露属性
defineExpose({
  a, b, fn
});
</script>

<template>
  <div>
    <button>这是子组件</button>
  </div>
</template>

<style scoped>

</style>