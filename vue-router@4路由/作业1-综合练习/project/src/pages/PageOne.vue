<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function back() {
  router.back()
}
</script>

<template>
  <div>
    <h1>Page1</h1>
    <div>
      <button @click="back">返回</button>
    </div>
  </div>
</template>

<style scoped>

</style>