<script setup>
// 知识点：
// 创建ref属性来获取页面元素
// 使用函数获取页面元素
// 组件上的ref
// v-for中的ref

import RefComponent from '@/components/RefComponent.vue';
import {ref} from 'vue';

// 创建ref属性来获取页面元素
// inp 的名称要和页面中 ref="inp" 相互对应
const inp = ref(null);

const fnRef = ref(null);

// 组件上也可以使用 ref
const child = ref(null);

function setInput() {
  // console.log(inp.value);
  // inp.value.value = '这是通过ref设置的值';
  console.log(fnRef.value);
}

function readComponent() {
  console.log(child.value.a);
  console.log(child.value.b);
  child.value.fn();
}

</script>

<template>
  <div>
    <!--    <input ref="inp" type="text"><br>-->
    <!--  使用函数形式设置 ref  -->
    <input :ref="el=>{ fnRef = el }" type="text"><br>
    <button @click="setInput">设置input的值</button>
    <br>
    <RefComponent ref="child"></RefComponent>
    <button @click="readComponent">读取组件内属性</button>
    <ul>
      <li ref="lis">1</li>
      <li ref="lis">2</li>
      <li ref="lis">3</li>
    </ul>
  </div>
</template>

<style scoped>

</style>