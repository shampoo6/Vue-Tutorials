<template>
  <div>
    <button @click="push">push Page1</button>
    <button @click="replace">replace Page2</button>
    <button @click="go">go</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    push() {
      // 使用 this.$router 来操作 router 对象
      // 此处的 this.$router 其实就是路由配置导出的 router

      // 编程式导航对应 router-link 也有一组声明式导航: https://router.vuejs.org/zh/guide/essentials/navigation.html

      // push 跳转页面并添加历史
      // 所有的编程式API都支持命名路由 例如: this.$router.push({name: 'p', parmas: {a: 1, b: 2}});
      // this.$router.push('/page1');

      // push 将返回一个 promise 对象
      // 当页面跳转完成时 会调用 promise 的 then 中的回调
      this.$router.push('/page1').then(()=>{
        console.log('页面跳转完成');
      })
    },
    replace() {
      // replace 当前页面跳转，但不会新增历史
      this.$router.replace('/page2');
    },
    go() {
      // go 前进指定数量的页面，可以是负数，负数代表后退
      this.$router.go(-1);
    }

    // router 还有 back 和 forward 函数，用来后退或前进
  }
};
</script>

<style scoped>

</style>