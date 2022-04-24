<script setup>
// 知识点：
// 声明事件
// 触发事件
// 自定义组件的 v-model

import EventsChild from '@/components/EventsChild.vue';
import {ref} from 'vue';


function onInputChange(value) {
  console.log(value);
}

const firstName = ref('');
const lastName = ref('');
const message = ref('');
</script>

<template>
  <div>
    <EventsChild @input-change="onInputChange" v-model:first-name="firstName"
                 v-model:last-name="lastName" v-model="message"></EventsChild>
    <div>
      full name: {{ firstName }} {{ lastName }}
    </div>
    <div>
      message: {{ message }}
    </div>
  </div>
</template>

<style scoped>

</style>