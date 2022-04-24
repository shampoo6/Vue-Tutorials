<template>
  <!-- 情况一：若组件中只存在一个根节点，则继承的属性就继承到该根节点上 -->
  <div>1</div>
  <!-- 情况二：若组件的根节点有多个，需要我们用v-bind="$attrs"去指定要将继承的属性绑定到哪个节点上 -->
  <div v-bind="$attrs">2</div>
  <div>3</div>
</template>

<script>
// 什么是html属性继承？
// 自定义组件可以继承html的属性到自己的根节点上

export default {
  data() {
    return {};
  },
  created(){
    console.log(this.$attrs);
  }
};
</script>

<style scoped>

</style>