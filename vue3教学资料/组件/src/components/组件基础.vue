<template>
  <div>
    <TestComponent></TestComponent>
<!--    <tc></tc>-->
  </div>
</template>

<script>
// 知识点：
// 什么是组件？
// 应用场景
// 组件的定义
// 注册组件
// 使用组件



// 1.声明组件

// 可以在js中声明一个对象来充当组件配置
// 或者创建一个 .vue 文件

// const Component1 = {
//   template: `<div>hello {{name}}</div>`,
//   data(){
//     return {
//       name: '张三'
//     }
//   }
// }

// 2. 注册组件
// 注册组件分全局注册和局部注册，全局注册请在 main.js 书写注册代码



// 3. 使用组件
// 使用组件时，将组件名称作为标签名使用即可
// 但是由于 html 模板的大小写不敏感，所以 vue 会自动将名字转换成小写和短横线的格式
// 例如：TestComponent，使用的时候可以是 <TestComponent> 也可以是 <test-component>


// import TestComponent from '@/components/TestComponent.vue';

export default {
  // 在组件配置中使用 components 来进行局部注册
  // 局部注册的组件只能在此处使用
  components: {
    // TestComponent
    // tc: TestComponent
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>