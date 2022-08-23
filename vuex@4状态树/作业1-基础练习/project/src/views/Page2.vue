<script setup>
import {useStore} from 'vuex'

const store = useStore()
</script>

<template>
  <div>
    text: {{ store.state.text }}
  </div>
</template>

<style scoped>

</style>