<template>
  <div>
    <InjectComponent></InjectComponent>
    <input type="text" v-model="message">
  </div>
</template>

<script>
import InjectComponent from '@/components/InjectComponent.vue';
import {computed} from 'vue';

// 知识点：
// 什么是依赖注入？
// 应用场景
// 声明供应商
// 声明消费者
// 消费者别名
// 消费者默认值
// 响应式注入
//    响应式属性使用 .value 取值
//    自动解包配置 app.config.unwrapInjectedRef = true;
// 应用层 Provide

export default {
  components: {
    InjectComponent
  },
  // 提供属性给后辈组件访问
  // provide: {
  //   message: 'hello world'
  // },
  // 为了读取自己的属性值，此处需要使用函数形式
  provide() {
    return {
      // 供应的属性是非响应式的
      // message: this.message
      // 显式提供一个计算属性，将使该属性变为响应式的
      message: computed(() => this.message)
    };
  },
  data() {
    return {
      message: 'hello world'
    };
  }
};
</script>

<style scoped>

</style>