<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function signOut() {
  // 退出
  localStorage.removeItem('token')
  // 跳转回登录页
  router.push('/signIn')
}
</script>

<template>
  <div>
    <h1>首页</h1>
    <button @click="signOut">退出</button>
  </div>
</template>

<style scoped>

</style>