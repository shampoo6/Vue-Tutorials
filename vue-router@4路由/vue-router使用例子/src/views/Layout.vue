<template>
  <div>
    <h1>这是我的layout</h1>
    <div>
      <router-link to="/layout/page1">To Page1</router-link>
      |
      <router-link to="/layout/page2">To Page2</router-link>
    </div>
    <!-- 父组件中声明一个路由视口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>