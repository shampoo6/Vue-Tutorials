<template>
  <div>
    <ul>
      <!--      <li>name: {{ $store.state.name }}</li>-->
      <li>storeName: {{ storeName }}</li>
      <li>name: {{ name }}</li>
      <li>sex: {{ sex }}</li>
      <li>age: {{ age }}</li>
    </ul>
    <div>
      <div>name: <input type="text" v-model="name">
        <button @click="modifyName">修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      name: '李四'
    };
  },
  computed: {
    // 使用 mapState 将 store 中的 state 解析到计算函数中
    // 此时就可以直接使用 name sex age 访问状态了
    // ...mapState(['name', 'sex', 'age']),

    // 参数可以是对象形式
    // key: 计算属性的名称
    // value: 计算函数,value中可以访问 store 的 state
    ...mapState({
      storeName(state) {
        return '姓名: ' + state.name;
      },
      sex: state => state.sex,
      age: state => state.age
    })
  },
  methods: {
    // mapActions 和 mapState 类似
    // 参数为数组时，将返回数组中声明的 store 中的 actions
    // ...mapActions(['aName']),

    // 也可以使用对象形式
    // key：method的函数名
    // value：store中action的名字
    ...mapActions({
      modifyStoreName: 'aName'
    }),
    aName() {
      console.log('aName');
    },
    modifyName() {
      // this.aName(this.name);
      this.modifyStoreName(this.name);
    }
  }
};
</script>

<style scoped>

</style>