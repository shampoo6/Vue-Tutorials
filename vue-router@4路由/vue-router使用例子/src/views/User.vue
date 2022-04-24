<template>
  <div>
    <h1>User</h1>
  </div>
</template>

<script>

export default {
  created() {
    // 选项式API 中 this.$route 代表当前路由对象
    console.log(this.$route)
    // 获取动态路由匹配的参数
    console.log(this.$route.params.id);
    console.log(this.$route.params.age);
  }
};
</script>

<style scoped>

</style>