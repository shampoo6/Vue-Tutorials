<template>
  <div>
<!--    <input type="text" :value="modelValue" @input="(ev)=>{ $emit('update:modelValue', ev.target.value) }">-->
    <div><label>first name: <input type="text" :value="firstName"
                                   @input="$emit('update:firstName', $event.target.value)"></label></div>
    <div><label>last name: <input type="text" :value="lastName"
                                   @input="$emit('update:lastName', $event.target.value)"></label></div>
  </div>
</template>

<script>
// 给自定义组件添加v-model
// 需要添加两个东西
// 1. v-model绑定的属性值
// 2. v-model触发的事件

export default {
  // 若父组件使用v-model且不加参数时，此处的modelValue和update:modelValue名称是固定的
  // props: ['modelValue'],
  // emits: ['update:modelValue'],

  // v-model 可以绑定具体的参数如：v-model:first-name v-model:last-name
  props: ['firstName', 'lastName'],
  emits: ['update:firstName', 'update:lastName'],
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>