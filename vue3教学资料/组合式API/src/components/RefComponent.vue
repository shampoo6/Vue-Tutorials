<script setup>
import {ref, defineExpose} from 'vue';

// 组合式API 的 <script setup> 中，默认情况所有的页面属性都没有暴露出去

const a = ref(0);
const b = ref(0);

function fn() {
  console.log('this is fn');
}

// 暴露属性给父组件使用
defineExpose({
  a, b, fn
});
</script>

<template>
  <div>
    a <input type="number" v-model.number="a">
    b <input type="number" v-model.number="b">
  </div>
</template>

<style scoped>

</style>