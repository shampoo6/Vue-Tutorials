<template>
  <table border>
    <thead>
    <tr>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <!--    <my-tr v-for="user in users" :key="user.id" v-bind="user" @on-submit="onTrSubmit"></my-tr>-->
    <my-tr v-for="user in users" :key="user.id" :id="user.id" v-model:name="user.name" v-model:sex="user.sex"
           v-model:age="user.age"></my-tr>
    </tbody>
  </table>
</template>

<script>
// import MyTr from '@/components/MyTR.vue';
import MyTr from '@/components/VModelMyTR.vue';

export default {
  components: {
    MyTr
  },
  data() {
    return {
      users: [
        {
          id: 0,
          name: '张三',
          sex: 'male',
          age: 16
        }, {
          id: 1,
          name: '李四',
          sex: 'female',
          age: 24
        }, {
          id: 2,
          name: '老王',
          sex: 'other',
          age: 30
        },
      ]
    };
  },
  methods: {
    onTrSubmit(user) {
      // 查询对应user的索引
      let index = this.users.findIndex(_u => _u.id === user.id);
      let u = this.users[index];
      for (const uKey in u) {
        u[uKey] = user[uKey];
      }
    }
  }
};
</script>

<style>
</style>
