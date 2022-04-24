<template>
  <div>
    <h1>登录</h1>
    <div class="card p-3" style="width: 350px">
      <div>
        <label class="form-label">账号</label>
        <input type="text" class="form-control" v-model="account">
      </div>
      <div>
        <label class="form-label">密码</label>
        <input type="password" class="form-control" v-model="pwd">
      </div>
      <div>
        <button class="btn btn-primary w-100" @click="signIn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      account: '',
      pwd: ''
    };
  },
  methods: {
    ...mapActions(['aAccount', 'aPwd']),
    signIn() {
      // this.$store.dispatch('aAccount', this.account);
      // this.$store.commit('mAccount', this.account);
      // this.$store.dispatch('aPwd', this.pwd);

      this.aAccount(this.account);
      this.aPwd(this.pwd);

      this.$router.replace('/home');
    }
  }
};
</script>

<style scoped>

</style>