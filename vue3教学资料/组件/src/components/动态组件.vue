<template>
  <div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <div>
      <button @click="toD1">d1</button>
      <button @click="toD2">d2</button>
    </div>
  </div>
</template>

<script>
// 知识点：
// 什么是动态组件？
// 应用场景
// 声明动态组件
// shallowRef
// KeepAlive


// 什么是动态组件？
// 通过变量赋值的方式可以动态修改某个组件，这个能被动态修改的组件就是动态组件
// 应用场景
// 动态组件多用于一个页面中的多个选项卡的切换

// 动态组件不会保留组件的状态，所以切换组件后，组件状态就消失了
// 若想要保留组件状态，那么可以使用 keep-alive 组件

import DC1 from '@/components/DComponent1.vue';
import {defineAsyncComponent, shallowRef} from 'vue';

// 动态组件在引入的时候需要使用 shallowRef 包裹一次，否则会收到一个性能开销过大的警告
let DComponent1 = shallowRef(DC1);
let DComponent2 = shallowRef(defineAsyncComponent(() => import('@/components/DComponent2.vue')));


export default {
  components: {
    DComponent1,
    DComponent2
  },
  data() {
    return {
      component: DComponent1
    };
  },
  methods: {
    toD1() {
      this.component = DComponent1;
    },
    toD2() {
      this.component = DComponent2;
    }
  }
};
</script>

<style scoped>

</style>