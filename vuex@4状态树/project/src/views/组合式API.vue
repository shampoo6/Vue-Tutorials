<script setup>
import {computed} from 'vue';
import {useStore, mapState} from 'vuex';

// 创建 store 对象
const store = useStore();

const name = computed({
  get() {
    return store.state.nickname;
  },
  set(value) {
    store.dispatch('aNickname', value);
  }
});

// 组合式API中无法使用 mapState 等辅助函数，因为组合式API 不存在 this
let {nickname} = mapState(['nickname']);
console.log(nickname);

</script>

<template>
  <div>
    <div>name: <input type="text" v-model="name"></div>
    <div>{{ nickname }}</div>
  </div>
</template>

<style scoped>

</style>