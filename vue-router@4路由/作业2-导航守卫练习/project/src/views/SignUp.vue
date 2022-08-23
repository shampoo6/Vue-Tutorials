<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const account = ref()
const pwd = ref()

function submit() {
  // 保存账号到 localStorage 中
  localStorage['user'] = JSON.stringify({
    account: account.value,
    pwd: pwd.value
  })

  // 跳转到登录页
  router.replace('/signIn')
}
</script>

<template>
  <div>
    <h1>注册</h1>
    <div><label>账号: <input type="text" v-model="account"></label></div>
    <div><label>密码: <input type="text" v-model="pwd"></label></div>
    <div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<style scoped>

</style>