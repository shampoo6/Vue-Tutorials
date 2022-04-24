<script setup>
// 知识点：
// 原始数据类型的响应式
// 数组或对象的响应式
// 只读属性
// toRefs

import {ref, reactive, readonly, toRefs} from 'vue';

// ref 函数可以创建一个响应式的数据对象
// 参数是初始值
const message = ref('hello world');
const isOk = ref(true);
const num = ref(0);

// 数组或对象想要成为响应式数据，请使用 reactive 函数
const user = reactive({
  name: '张三', age: 24, sex: 'other'
});

const nums = reactive([1, 2, 3]);

// let users = reactive([
//   {name: '张三'}, {name: '李四'}, {name: '老王'}
// ]);

// 使用ref令reactive返回的对象成为响应式属性
let users = ref(reactive([{name: '张三'}, {name: '李四'}, {name: '老王'}]));

const value = ref('hello value');
// 使用 readonly 函数包裹一个响应式属性，会返回一个只读属性
const readOnlyValue = readonly(value);

const changeUserName = () => {
  // users[1].name = '里死死死死死死死死' // 由于 users 使用了 reactive 函数，所以数组成员都是响应式的
  // users[1] = {name: '李四2'};
  // setTimeout(() => {
  //   console.log('计时器已触发，修改name');
  //   users[1].name = '李四3';
  // }, 1000);

  // 以上测试的结论：
  // 使用 reactive 声明的对象或数组其内容的修改都将是响应式的


  // 注意：users 不是响应式的，所以替换整个数组将无法更新页面
  // users = reactive([
  //   {name: '张三1'}, {name: '李四2'}, {name: '老王3'}
  // ]);
  users.value = reactive([
    {name: '张三1'}, {name: '李四2'}, {name: '老王3'}
  ]);
};

// 使用 toRefs 解包对象或数组
// 将对象或数组变成 ref 响应式数据
const {name, sex, age} = toRefs(user);

</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <h1>{{ isOk }}</h1>
    <h1>{{ num }}</h1>
    <div>
      <div>name: <input type="text" v-model="user.name"></div>
      {{ user.name }}
      <div>age: <input type="number" v-model.number="user.age"></div>
      {{ user.age }}
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in nums" :key="index">
          <input type="number" :value="item" @input="ev=>{nums[index] = Number(ev.target.value)}">{{ item }}
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in users" :key="index">{{ item.name }}</li>
      </ul>
      <div>
        <button @click="changeUserName">修改李四的名称</button>
      </div>
    </div>
    <div>
      value: <input type="text" v-model="readOnlyValue">{{ readOnlyValue }}
    </div>
    <div>
      <form>
<!--        <div><label>name: <input type="text" v-model="user.name"></label>{{ user.name }}</div>
        <div><label>sex: <input type="text" v-model="user.sex"></label>{{ user.sex }}</div>
        <div><label>age: <input type="number" v-model.number="user.age"></label>{{ user.age }}</div>-->
        <div><label>name: <input type="text" v-model="name"></label>{{ name }}</div>
        <div><label>sex: <input type="text" v-model="sex"></label>{{ sex }}</div>
        <div><label>age: <input type="number" v-model.number="age"></label>{{ age }}</div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>