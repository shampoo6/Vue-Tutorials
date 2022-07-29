<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-3 d-flex flex-row" style="width: 650px;">
      <!-- 左边 -->
      <div style="width: 100px" class="border d-flex justify-content-center align-items-center flex-shrink-0 me-3">
        这<br>
        是<br>
        大<br>
        标<br>
        题<br>
      </div>
      <!-- 右边 -->
      <div class="row row-cols-2 g-2">
        <div class="col"><ChildComponent/></div>
        <div class="col"><ChildComponent/></div>
        <div class="col"><ChildComponent/></div>
        <div class="col"><ChildComponent/></div>
      </div>
    </div>
  </div>
</template>

<script>
import Child from '@/components/ChildComponent.vue';

export default {
  name: 'App',
  components: {
    ChildComponent: Child
  }
};
</script>

<style>
</style>
