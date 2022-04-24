<template>
  <div>
    <!-- slot 标签添加匿名插槽
      匿名插槽可以接收默认的标签体中的内容
     -->
    <div>
      <h1>header</h1>
      <!-- 具名插槽 -->
      <slot name="header"></slot>
    </div>
    <div>
      <h1>content</h1>
      <!-- 可以在slot标签中给插槽添加默认值，父组件没有传入内容时，将使用该默认值 -->
      <slot>ok!!!</slot>
    </div>
    <div>
      <h1>footer</h1>
      <!-- 具名插槽 -->
      <slot name="footer"></slot>
    </div>

    <div>
      <h1>作用域插槽</h1>
      <!-- 声明作用域插槽，并将要暴露的属性绑定上去 -->
      <slot :n="name" :a="age"></slot>
    </div>
  </div>
</template>

<script>
// 知识点:
// 什么是插槽？
// 匿名插槽
// 插槽的默认值
// 具名插槽
// 作用域插槽
// this.$slots


// 什么是插槽？
// 允许父元素为组件的标签体设置内容，该功能由插槽完成
// 形象的理解，插槽就是在组件上指定几个固定的位置，然后父组件可以在这几个固定的位置添加内容

export default {
  data() {
    return {
      // 子组件中的数据，无法在父组件的标签体中直接引用
      // 所以可以使用作用域插槽，暴露自己的属性给父组件，父组件中子组件的标签体就可以访问这些属性了
      name: '张三',
      age: 16
    };
  },
  mounted() {
    // js 代码可以通过 this.$slots 去访问插槽
    console.log(this.$slots)
    console.log(this)
  }
};
</script>

<style scoped>

</style>