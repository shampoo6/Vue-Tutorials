<template>
    <!-- 若 message 是一个计算属性，那么其值需要通过.value进行访问 -->
    <div>{{ message }}</div>
<!--  <div>{{ msg }}</div>-->
</template>

<script>
// 依赖注入
// 依赖注入就是，一个先辈组件提供一些属性，这样的后辈组件都可以读取该属性的值

export default {
  // 消费先辈的属性使用 inject
  // 写法类似于props
  // inject: ['message'],
  inject: {
    // 别名
    // msg: {
    //   from: 'message', // 指定别名对应的供应商的属性
    //   default() {
    //     return 'this is default message';
    //   }
    // }


    message: {
      // from: 'message', // 当名称和 from 的值相同时，from 可以省略
      default() {
        return 'this is default message';
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>