<template>
  <div>
    <!-- 模板中使用 $store 访问 vuex 的 store 对象 -->
    <div>count: {{ $store.state.count }}</div>
    <div>
      <!-- 通过 $store.dispatch 函数去调用 store 的 action -->
      <!--      <button @click="$store.dispatch('aCount', $store.state.count + 1)">+</button>-->
      <!-- 也可以通过调用 $store.commit 函数 直接调用 mutation 来修改状态 -->
      <button @click="$store.commit('mCount', $store.state.count + 1)">+</button>
      <button @click="callAction">调用action</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    callAction() {
      // 无论 action 是否声明的异步函数 dispatch 都将返回 promise 对象
      let promise = this.$store.dispatch('aCount', 0);
      promise.then(r => {
        console.log(r);
      });
    }
  }
};
</script>

<style scoped>

</style>