<template>
  <div>欢迎登入！！！{{ storeAccount }}</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
      account: '张三'
    };
  },
  computed: {
    ...mapState({
      storeAccount: state => state.account
    })
  }
};
</script>

<style scoped>

</style>