<script setup>
// 知识点：
// 声明计算属性
// 计算属性的get和set

import {computed, ref} from 'vue';

const cny = ref(0);
// const rub = computed(() => cny.value * 13.31);

const rub = computed({
  get() {
    return cny.value * 13.31;
  },
  set(value) {
    cny.value = value / 13.31;
  }
});
</script>

<template>
  <div>
    cny: <input type="text" v-model="cny"><br/>
    <!--    rub: <input type="text" readonly :value="rub">-->
    rub: <input type="text" v-model="rub">
  </div>
</template>

<style scoped>

</style>