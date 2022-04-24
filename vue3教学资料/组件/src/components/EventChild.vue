<template>
  <div>
    <input type="text" @input="inputChange">
  </div>
</template>

<script>
// 组件事件

// 什么是组件事件？
// 由组件发出的事件就是组件事件

// 给自定义组件添加 v-model 双向绑定

export default {
  // 组件事件如何声明？
  // 使用 emits 属性声明事件
  emits: ['onInputChange', 'onSexChange'],
  data() {
    return {};
  },
  methods: {
    inputChange(ev) {
      // 如何发起和接收事件？
      // 如何传递事件参数？
      // 组件内通过 this.$emit 函数发出事件
      // 第一个参数：emits中声明的事件名称
      // 第二个参数：发起事件时传递的参数
      this.$emit('onInputChange', ev.target.value);
    }
  }
};
</script>

<style scoped>

</style>