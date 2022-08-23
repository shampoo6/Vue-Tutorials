<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const text = computed({
  get() {
    return store.state.text
  },
  set(value) {
    store.dispatch('aText', value)
  }
})

</script>

<template>
  <div>
    <input type="text" v-model="text">
  </div>
</template>

<style scoped>

</style>