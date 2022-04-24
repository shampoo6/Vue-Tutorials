<script setup>
// 知识点：
// 了解vue响应式属性更新页面是异步的
// 什么是nextTick
// nextTick的用法
// 选项式API中nextTick的使用


import {reactive, ref, nextTick} from 'vue';

const box = reactive({
  width: '100px',
  height: '100px',
  backgroundColor: '#ff0'
});

const boxRef = ref(null);

const width = ref('');

function changeBox() {
  // 由于vue的响应式属性的修改是异步更新页面的
  // 所以此处修改box的width属性，并不会立即更新页面
  // 所以页面的box的clientWidth还是以前的值
  box.width = width.value;
  console.log(boxRef.value.clientWidth);

  // 此时可以使用 nextTick 函数
  // nextTick代表下一次渲染结束后，会调用函数的回调
  nextTick(() => {
    // 回调函数中的内容，将在下次渲染完成后执行
    console.log(boxRef.value.clientWidth);
  });

  // 在选项式API中，nextTick的用法如下：
  // this.$nextTick(()=>{})
}
</script>

<template>
  <div>
    <div ref="boxRef" :style="box"></div>
    <div>
      <input type="text" v-model="width">
      <button @click="changeBox">修改box</button>
    </div>
  </div>
</template>

<style scoped>

</style>