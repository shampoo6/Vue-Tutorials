<script setup>
// 引入全局消息
import {message} from 'ant-design-vue';
import {ref} from 'vue';

// 对话框的显示状态
const visible = ref(false);

function sendMessage() {
  message.info('info');
  message.warning('warning');
  message.success('success');
  message.error('error');
}

function openDialog() {
  visible.value = true
}


</script>

<template>
  <div>
    <a-button @click="sendMessage">发起消息</a-button>
    <a-button @click="openDialog">打开对话框</a-button>
    <a-modal v-model:visible="visible" title="标题">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>

      <template #footer>
        <a-button type="primary">确定</a-button>
        <a-button type="danger">取消</a-button>
      </template>
    </a-modal>
  </div>
</template>

<style scoped>

</style>