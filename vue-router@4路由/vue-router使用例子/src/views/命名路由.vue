<template>
  <div>
    <!-- router-link 绑定to属性 填入对象参数，并将name属性指定为路由配置中的name -->
    <router-link :to="{name: 'myPage', params: {id: 'myId'}}" replace>toPage3</router-link>
    <button @click="toPage3">to page3</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toPage3() {
      // 参数为对象，name值为路由配置中的name
      // this.$router.replace({name: 'myPage'});
      // 可以传参
      this.$router.replace({name: 'myPage', params: {id: 'myId'}});
    }
  }
};
</script>

<style scoped>

</style>