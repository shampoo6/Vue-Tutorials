<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const account = ref()
const pwd = ref()

// 登录
function submit() {
  let user = localStorage['user']
  if (!user) {
    alert('账号或密码错误')
    return
  }

  user = JSON.parse(user)
  if (user.account !== account.value || user.pwd !== pwd.value) {
    alert('账号或密码错误')
    return
  }

  // 保存登录状态
  localStorage['token'] = true
  // 跳转到首页
  router.push('/home')
}
</script>

<template>
  <div>
    <h1>登录</h1>
    <div><label>账号: <input type="text" v-model="account"></label></div>
    <div><label>密码: <input type="text" v-model="pwd"></label></div>
    <div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<style scoped>

</style>