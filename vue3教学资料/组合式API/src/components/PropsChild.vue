<script setup>

// 使用 defineProps 定义属性
// 参数和选项式API的props参数相同
// const {name, sex, age} = defineProps(['name', 'sex', 'age']);

// props 校验
defineProps({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    default() {
      return 'other';
    }
  },
  age: {
    type: Number,
    default() {
      return 0;
    }
  }
});
</script>

<template>
  <div>
    <ul>
      <li>{{ name }}</li>
      <li>{{ sex }}</li>
      <li>{{ age }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>