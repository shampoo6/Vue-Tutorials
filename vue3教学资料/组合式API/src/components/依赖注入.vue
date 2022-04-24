<script setup>
// 知识点：
// 声明供应商
// 声明消费者

import ic from '@/components/InjectComponent.vue';
import {provide, ref} from 'vue';

let theme = ref('light');

// 通过provide函数提供数据
provide('theme', theme);
</script>

<template>
  <div>
    <ic></ic>
    <div>
      <input type="text" v-model="theme">
    </div>
  </div>
</template>

<style scoped>

</style>