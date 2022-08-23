<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function toPage2() {
  // router.push({name: 'page2'})
  router.push('/page2/child')
}
</script>

<template>
  <div>
    <h1>Home</h1>
    <div>
      <router-link to="/page1">page1</router-link>
      <button @click="toPage2">page2</button>
    </div>
  </div>
</template>

<style scoped>

</style>