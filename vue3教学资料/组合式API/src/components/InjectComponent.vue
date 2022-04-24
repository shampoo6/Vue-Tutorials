<script setup>
// 消费数据

import {inject} from 'vue';

// 第一个参数：供应商提供的参数名
// 第二个参数：默认值
const theme = inject('theme', 'dark');
</script>

<template>
  <div>
    接受的主题是：{{ theme }}
  </div>
</template>

<style scoped>

</style>