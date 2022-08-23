<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const account = ref('user')

function signIn() {
  // 登录

  // 保存登录状态
  localStorage['token'] = account.value

  router.push('/home')
}
</script>

<template>
  <div>
    <h1>登录</h1>
    <div><label>账号: <select v-model="account">
      <option value="user">用户</option>
      <option value="admin">管理员</option>
    </select></label></div>
    <div>
      <button @click="signIn">登录</button>
    </div>
  </div>
</template>

<style scoped>

</style>