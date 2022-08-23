<script setup>
import {useStore} from 'vuex'

const store = useStore()

const {name, count, price} = defineProps({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

function add() {
  // 添加一个商品
  store.dispatch('shoppingCar/changeGoodsCount', {name, count: 1})
}

function reduce() {
  // 减少一个商品
  store.dispatch('shoppingCar/changeGoodsCount', {name, count: -1})
}
</script>

<template>
  <div class="container">
    <span>{{ name }}</span>
    <div>
      <button @click="reduce">-</button>
      <span>{{ count }}</span>
      <button @click="add">+</button>
    </div>
    <span>小计: {{ price }} x {{ count }} = {{ price * count }}</span>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #949494;
  border-radius: 5px;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;
}
</style>