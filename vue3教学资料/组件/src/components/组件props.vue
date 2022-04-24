<template>
  <div>
<!--    <UserInfo name="张三" sex="male" :age="15" checked></UserInfo>-->

    <!--  通过对象方式绑定props  -->
    <UserInfo v-bind="userInfo"/>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';

// 知识点：
// 什么是props？
// 应用场景
// 声明和访问props
// props 校验
// props 是只读的

export default {
  components: {
    UserInfo
  },
  data() {
    return {
      userInfo: {
        name: '李四',
        sex: 'female',
        age: 24,
        checked: true,
        date: new Date()
      }
    };
  }
};
</script>

<style scoped>

</style>