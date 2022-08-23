<script setup>

// 获取localStorage中用户的登录状态
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const token = ref(localStorage['token'])


function signOut() {
  localStorage.removeItem('token')

  // 移除多余的路由配置
  router.removeRoute('p1')
  router.removeRoute('p2')
  router.removeRoute('p3')

  router.push('/signIn')
}

// 动态添加对应用户名的路由配置
function addRoute() {
  if (token.value === 'user') {
    // 不存在 page1 才添加 page1
    if (!router.hasRoute('p1'))
      router.addRoute('home', {
        path: 'page1',
        name: 'p1',
        component: () => import('@/views/Page1')
      })
    if (!router.hasRoute('p2'))
      router.addRoute('home', {
        path: 'page2',
        name: 'p2',
        component: () => import('@/views/Page2')
      })
  } else if (token.value === 'admin') {
    if (!router.hasRoute('p2'))
      router.addRoute('home', {
        path: 'page2',
        name: 'p2',
        component: () => import('@/views/Page2')
      })
    if (!router.hasRoute('p3'))
      router.addRoute('home', {
        path: 'page3',
        name: 'p3',
        component: () => import('@/views/Page3')
      })
  }
}

addRoute()
</script>

<template>
  <div>
    <h1>Home</h1>
    <router-link v-if="token === 'user'" to="/home/page1">page1</router-link>
    <span v-if="token === 'user'">|</span>
    <router-link to="/home/page2">page2</router-link>
    <span v-if="token === 'admin'">|</span>
    <router-link v-if="token === 'admin'" to="/home/page3">page3</router-link>
    <div>
      <button @click="signOut">登出</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>