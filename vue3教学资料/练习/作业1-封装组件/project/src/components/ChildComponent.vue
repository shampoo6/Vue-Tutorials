<template>
  <div class="card p-3" style="width: 250px;">
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex flex-column justify-content-between">
        <div class="fw-bolder">This is info's title</div>
        <div class="text-secondary">this is sub title</div>
      </div>
      <div>
        <div style="width: 64px; height: 64px;"
             class="d-flex justify-content-center align-items-center border bg-danger">img
        </div>
      </div>
    </div>
    <div>
      <ListInfo></ListInfo>
      <ListInfo></ListInfo>
      <ListInfo></ListInfo>
    </div>
  </div>
</template>

<script>
import ListInfo from '@/components/ListInfo.vue';

export default {
  components: {
    ListInfo
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>