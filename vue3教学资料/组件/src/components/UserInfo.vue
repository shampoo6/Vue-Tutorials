<template>
  <div>
    <ul>
      <!-- 模板中可以从props直接读值 -->
      <li>name: {{ name }}</li>
      <li>sex: {{ sex }}</li>
      <li>age: {{ age }}</li>
      <li>checked: {{ checked }}</li>
      <li>date: {{ date }}</li>
    </ul>
    <div>
      <button @click="onClick">修改name</button>
    </div>
  </div>
</template>

<script>
// props 是什么？
// 组件上的 html 属性

export default {
  // props 的声明
  // 值为一个数组
  // props: ['name', 'sex', 'age'],
  // props 校验
  props: {
    name: {
      type: String,
      required: true
    },
    sex: String,
    age: [String, Number], // 设置多种支持的数据类型
    checked: Boolean,
    date: {
      // 数据类型
      type: Date,
      // 设置默认值
      // default: new Date()
      // 默认值也可以用函数声明
      default() {
        return new Date();
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    onClick(){
      // 使用this访问props
      this.name = '老王'

      // props 是只读的 所以无法修改
    }
  }
};
</script>

<style scoped>

</style>