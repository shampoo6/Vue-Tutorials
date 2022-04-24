<script setup>
import Header from '@/components/Header.vue';
import {provide, ref} from 'vue';

const theme = ref('light');

provide('theme', theme);

function themeChange(value) {
  theme.value = value;
}
</script>

<template>
  <div class="container border vh-100 d-flex flex-column" style="width: 800px">
    <div>
      <Header @theme-change="themeChange"></Header>
    </div>
    <div class="p-3 flex-grow-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>