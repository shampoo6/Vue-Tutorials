<script setup>
// 知识点？ https://staging-cn.vuejs.org/guide/reusability/custom-directives.html
// 如何声明一个自定义指令
// 指令中的钩子函数

// 声明一个对象，该对象中只要包含自定义指令所需要的钩子函数，且名称以v开头，那么Vue会自动识别该对象为指令配置
const vMyFocus = {
  // 在绑定元素的 attribute 前调用
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // el: 指令绑定的 dom 对象
    console.log(el);
    // binding: 一个包含指令相关属性的对象
    const {
      value, // 指令绑定的值
      oldValue,
      arg, // 传递给指令的参数, v-focus:ok ok就是 arg的值
      modifiers, // 指令修饰符
      instance, // 使用指令的实例对象
      dir
    } = binding;
    console.log(value);
    console.log(arg);
    console.log(modifiers);
    console.log(instance);
    console.log(dir);
    console.log(dir === vMyFocus);

    console.log(vnode); // vue 中的虚拟文档节点 类似于 react-dom
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都 挂载 完成后调用
  mounted(el, binding, vnode, prevVnode) {
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都 更新 完成后调用
  updated(el, binding, vnode, prevVnode) {
  },
  // 绑定元素的父组件卸载之前调用
  beforeUnmount(el, binding, vnode, prevVnode) {
  },
  // 绑定元素的父组件卸载之后调用
  unmounted(el, binding, vnode, prevVnode) {
  }
};
</script>

<template>
  <div>
    <input id="myInput" type="text" v-my-focus:abc.ok="100">
  </div>
</template>

<style scoped>

</style>