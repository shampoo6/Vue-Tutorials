<template>
  <div>
    <AttrComponent id="testId" class="color"></AttrComponent>
  </div>
</template>

<script>
import AttrComponent from '@/components/AttrComponent.vue';

// 知识点：
// 什么是html属性继承？
// 应用场景
// 默认继承
// 指定节点继承
// this.$attrs

export default {
  components: {
    AttrComponent
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.color {
  color: red;
}
</style>