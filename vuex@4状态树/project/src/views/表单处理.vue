<template>
  <div>
    <div>
      <div><label>name: <input type="text" v-model="name"></label></div>
      <div>sex:
        <label><input type="radio" value="male" v-model="sex">男</label>
        <label><input type="radio" value="female" v-model="sex">女</label>
        <label><input type="radio" value="other" v-model="sex">其他</label>
      </div>
      <div><label>age: <input type="number" v-model.number="age"></label></div>
    </div>
    <div>name: {{ name }}</div>
    <div>sex: {{ sex }}</div>
    <div>age: {{ age }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    name: {
      // 读取name状态
      get() {
        // 参数来自于vuex
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit('mName', value);
      }
    },
    sex: {
      get() {
        return this.$store.state.sex;
      },
      set(value) {
        this.$store.commit('mSex', value);
      }
    },
    age: {
      get() {
        return this.$store.state.age;
      },
      set(value) {
        this.$store.commit('mAge', value);
      }
    }
  }
};
</script>

<style scoped>

</style>