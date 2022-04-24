<template>
  <div>
    <!-- 默认视图 没有加name -->
    <router-view></router-view>
    <!-- 以下两个就是命名视图 -->
    <router-view name="view1"></router-view>
    <router-view name="view2"></router-view>
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