<script setup>
import {defineProps} from 'vue'

defineProps(['name'])
</script>

<template>
  <div>
    <h1>Page3</h1>
    <p>
      name: {{ name }}
    </p>
    <div>
      <router-view name="v1"></router-view>
    </div>
    <div>
      <router-view name="v2"></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>