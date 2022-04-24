<script setup>
import {ref} from 'vue';

const count = ref(0);
const increase = () => {
  count.value++;
};
</script>

<template>
  <div>
    <div>{{ count }}</div>
    <div>
      <button @click="increase">+</button>
    </div>
  </div>
</template>

<!--<script>
import {ref} from 'vue';

export default {
  setup() {
    // ref 的作用是创建响应式属性
    const count = ref(0);

    const increase = () => {
      count.value++; // 响应式属性需要通过value来读写属性
    };

    return {
      count,
      increase
    };
  },
  data() {
    return {};
  }
};
</script>-->

<style scoped>

</style>