<template>
  <div>
    <h1>路由组件传参</h1>
    <div>id: {{ id }}</div>
    <div>name: {{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ['id', 'name'],
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  }
};
</script>

<style scoped>

</style>