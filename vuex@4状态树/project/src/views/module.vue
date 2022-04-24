<template>
  <div>
    <div>nickname: <input type="text" v-model="nickname"></div>
    <div>{{ nickname }}</div>
    <!-- 通过循环展示购物车列表 -->
    <ul>
      <li v-for="(item, i) in shoppingCar" :key="i">{{ item }}</li>
    </ul>
    <div>
      <input type="text" v-model="goods">
      <button @click="addGoods">添加</button>
    </div>
    <div>
      <button @click="setGoods">设置全局 goods</button>
    </div>
    <div>
      <div>姓名：{{ name }}</div>
      <input type="text" v-model="myName">
      <button @click="changeName">修改name</button>
    </div>
    <div>
      userInfo.name: <input type="text" @input="onUserInfoNameInput"> {{ userInfo.name }} <br/>
      userInfo.balance: <input type="number" @input="onUserInfoBalanceInput"> {{ userInfo.balance }}
    </div>
  </div>
</template>

<script>
import {/*mapState, mapActions, */createNamespacedHelpers} from 'vuex';

// 通过函数 createNamespacedHelper 创建带有命名空间的 mapState 和 mapActions
const {mapState, mapActions} = createNamespacedHelpers('shoppingCar');

export default {
  data() {
    return {
      goods: '',
      myName: ''
    };
  },
  computed: {
    // mapState 和 mapAction 接收第一个参数，第一个参数是命名空间
    // ...mapState('shoppingCar', ['userInfo']),
    ...mapState(['userInfo']),
    nickname: {
      get() {
        // 使用模块时，使用模块名称来访问模块状态
        return this.$store.state.myUser.nickname;
      },
      set(value) {
        // 使用 commit 调用模块注册的全局 mutations
        this.$store.commit('mNickname', value);
      }
    },
    shoppingCar() {
      // 读取 shoppingCar
      return this.$store.state.shoppingCar.goods;
    },
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    // ...mapActions('shoppingCar', ['aUserInfo']),
    ...mapActions(['aUserInfo']),
    addGoods() {
      // 没有命名空间的情况
      // this.$store.dispatch('insertGoods', this.goods);
      // 若模块存在命名空间 则调用时请使用命名空间
      this.$store.dispatch('shoppingCar/insertGoods', this.goods);
    },
    setGoods() {
      this.$store.dispatch('aGoods', ['1', '2', '3']);
    },
    changeName() {
      this.$store.dispatch('shoppingCar/changeName', this.myName);
    },
    onUserInfoNameInput(ev) {
      this.aUserInfo({balance: this.userInfo.balance, name: ev.target.value});
    },
    onUserInfoBalanceInput(ev) {
      this.aUserInfo({balance: Number(ev.target.value), name: this.userInfo.name});
    }
  }
};
</script>

<style scoped>

</style>