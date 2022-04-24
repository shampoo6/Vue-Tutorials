<template>
  <div>
    <!--  在父组件上使用v-on绑定子组件发出的事件  -->
    <EventChild @on-input-change="onInputChange"></EventChild>
    <!--    <VModelChild v-model="name"></VModelChild>-->
    <!--    <div>{{ name }}</div>-->
    <VModelChild v-model:first-name="firstName" v-model:last-name="lastName"></VModelChild>
    <div>full name: {{ firstName }} {{ lastName }}</div>
  </div>
</template>

<script>
import EventChild from '@/components/EventChild.vue';
import VModelChild from '@/components/VModelChild.vue';

// 知识点：
// 什么是组件事件？
// 应用场景
// 事件声明
// 事件触发
// 事件参数
// 实现组件的v-model

export default {
  components: {
    EventChild,
    VModelChild
  },
  data() {
    return {
      name: '',
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    onInputChange(arg) {
      console.log('接收到子组件的onInputChange事件');
      console.log(arg);
    }
  }
};
</script>

<style scoped>

</style>