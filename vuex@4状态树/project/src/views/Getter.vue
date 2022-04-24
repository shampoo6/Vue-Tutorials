<template>
  <div>
    <h1>所有的todo</h1>
    <ul>
      <li v-for="(todo, i) in $store.state.todos" :key="i">{{ todo.text }} {{ todo.active }}</li>
    </ul>
    <h1>激活的todo</h1>
    <ul>
      <li v-for="(todo, i) in $store.getters.activeTodos" :key="i">{{ todo.text }} {{ todo.active }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>