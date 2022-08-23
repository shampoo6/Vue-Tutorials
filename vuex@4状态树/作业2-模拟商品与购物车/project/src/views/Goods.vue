<script setup>
import GoodsItem from '@/components/GoodsItem'
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const goods = computed(() => store.state.goods.goods)
</script>

<template>
  <div>
    <div class="goods-list">
      <GoodsItem v-for="item in goods" :key="item.name" v-bind="item"></GoodsItem>
    </div>
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