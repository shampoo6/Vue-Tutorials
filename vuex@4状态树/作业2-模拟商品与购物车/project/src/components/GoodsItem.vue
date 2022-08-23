<script setup>
import {useStore} from 'vuex'

const store = useStore()

const {name, price} = defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

function addToShoppingCar() {
  // 添加至购物车
  store.dispatch('shoppingCar/addGoodsToShoppingCar', {name, price, count: 1})
}
</script>

<template>
  <div class="container">
    <span>{{ name }}</span>
    <span>￥{{ price }}</span>
    <button @click="addToShoppingCar">加入购物车</button>
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