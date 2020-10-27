# Vue文件
.vue后缀的文件就是Vue文件，此文件代表一个完整的vue对象

## 文件结构
```vue
// vue文件由以下几个部分组成

// template 标签代表vue对象的模板
<template>
    // template 标签中一定要有一个根节点，且只能有一个根节点
</template>

// script标签中的内容是 vue对象的配置
<script>
// vue对象配置，需要通过 export default 进行导出
export default {
    created() {
        console.log('生命周期函数 created 被调用了')
    },
    data(){
        return {}
    },
    watch: {}
}
</script>

// 页面中的样式，写在style标签中
<!-- Add "scoped" attribute to limit CSS to this component only -->
// 添加scoped属性 可以限制css样式只在当前组件中有效
<style scoped>

</style>
```