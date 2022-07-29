<template>
  <div>
    <slot-component>
      <!-- 匿名作用域插槽 -->
      <template v-slot:default="props">
        {{props.n}} {{props.a}}
      </template>

      <!-- 具名作用域插槽 -->
      <template #header="props">
        {{props.c}}
      </template>

      <!-- 标签体中的内容将默认插入匿名插槽 -->
      <!--      hello world<br/>
            <h2>hello</h2>-->

      <!-- 使用 v-slot 指令插入具名插槽
        v-slot 可以缩写为 #
       -->
      <!--      <template #footer>
              这是footer中插入的内容
            </template>-->

      <!-- v-slot 指令只能用在组件或template标签上 -->
      <!--      <div v-slot:header>
              这是header中插入的内容
            </div>-->

      <!--      <template v-slot:header>
              这是header中插入的内容
            </template>-->

      <!-- 若已经存在具名插槽，则默认的匿名插槽需要使用default这个名称 -->
      <!--      <template v-slot:default>
              content的内容
            </template>-->
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from '@/components/SlotComponent.vue';

// 知识点:
// 什么是插槽？
// 匿名插槽
// 插槽的默认值
// 具名插槽
// 作用域插槽
// this.$slots

export default {
  components: {
    SlotComponent
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>