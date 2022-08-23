<script setup>
import CarItem from '@/components/CarItem'
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const car = computed(() => store.state.shoppingCar.car)
</script>

<template>
  <div>
    <div class="goods-list">
      <CarItem v-for="item in car" :key="item.name" v-bind="item"></CarItem>
    </div>
    <div>总计: {{ store.getters['shoppingCar/total'] }}</div>
  </div>
</template>

<style scoped>
.goods-list {
  width: 300px;
  border: 3px solid #000;
  padding: 16px;
}

.goods-list > div:first-child {
  margin: 0 !important;
}
</style>