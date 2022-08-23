<script setup>
import {useStore} from 'vuex'
import {computed, ref} from 'vue'

const store = useStore()

const users = computed(() => store.state.user.users)
const allMale = computed(() => store.getters['user/allMale'])
const name = computed({
  get() {
    return store.state.user.name
  },
  set(value) {
    store.dispatch('user/aName', value)
  }
})
const sex = computed({
  get() {
    return store.state.user.sex
  },
  set(value) {
    store.dispatch('user/aSex', value)
  }
})
const age = computed({
  get() {
    return store.state.user.age
  },
  set(value) {
    store.dispatch('user/aAge', value)
  }
})

const showMale = ref(false)

function showAllMale() {
  showMale.value = true
}

function addUser() {
  store.dispatch('user/addUser', {
    name: name.value,
    sex: sex.value,
    age: age.value
  })
}
</script>

<template>
  <div>
    <button @click="showAllMale">显示所有男性</button>
    <h1>所有数据</h1>
    <table border>
      <thead>
      <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.name">
        <td>{{ user.name }}</td>
        <td>{{ user.sex }}</td>
        <td>{{ user.age }}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="showMale">
      <h1>所有男性</h1>
      <table border>
        <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in allMale" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.sex }}</td>
          <td>{{ user.age }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h1>添加用户</h1>
      <div>name: <input v-model="name" type="text"></div>
      <div>sex:
        <label><input v-model="sex" type="radio" value="male">男</label>
        <label><input v-model="sex" type="radio" value="female">女</label>
        <label><input v-model="sex" type="radio" value="other">其他</label>
      </div>
      <div>age: <input v-model="age" type="number"></div>
      <div>
        <button @click="addUser">添加</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>