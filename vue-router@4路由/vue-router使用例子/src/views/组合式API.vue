<script setup>
import {useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate} from 'vue-router';

// 获取路由和路由器对象
const route = useRoute();
const router = useRouter();

// 组合式 API 中的代码相当于就是路由进入前的回调函数
// 因为此时组件还没有产生
console.log('before enter')

// 与 beforeRouteLeave 相同，无法访问 `this`
onBeforeRouteLeave((to, from) => {
  console.log('before leave');
});

// 与 beforeRouteUpdate 相同，无法访问 `this`
onBeforeRouteUpdate((to, from) => {
  console.log('before update');
});

function toPage2() {
  console.log(route);
  router.push('/page2');
}
</script>

<template>
  <div>
    <!-- 模板中依然可以直接使用 $router 和 $route -->
    <button @click="$router.push('/page1')">to Page1</button>
    <button @click="toPage2">to Page2</button>
  </div>
</template>

<style scoped>

</style>