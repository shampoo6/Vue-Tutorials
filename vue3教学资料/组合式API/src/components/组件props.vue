<script setup>
// 知识点：
// 定义props
// props 校验

import PropsChild from '@/components/PropsChild.vue';
import {reactive, toRefs} from 'vue';

const {name, sex, age} = toRefs(reactive({
  name: '',
  sex: 'other',
  age: 15
}));

</script>

<template>
  <div>
<!--    <PropsChild :name="name" :sex="sex" :age="age"></PropsChild>-->
    <PropsChild :name="name"></PropsChild>
    <div>
      name: <input type="text" v-model="name">
      sex: <input type="text" v-model="sex">
      age: <input type="number" v-model.number="age">
    </div>
  </div>
</template>

<style scoped>

</style>