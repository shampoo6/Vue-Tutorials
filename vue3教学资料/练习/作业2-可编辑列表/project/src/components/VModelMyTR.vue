<template>
  <tr>
    <td>
      <!--   页面将根据是否处在编辑模式中来渲染不同的元素   -->
      <!--  非编辑模式  -->
      <span v-if="!isEditMode">{{ name }}</span>
      <!--  编辑模式  -->
      <input v-if="isEditMode" type="text" :value="name" @input="ev=>{$emit('update:name', ev.target.value)}">
    </td>
    <td>
      <span v-if="!isEditMode">{{
          sex === 'male' ?
              '男' :
              sex === 'female' ?
                  '女' : '其他'
        }}</span>
      <select v-if="isEditMode" :value="sex" @change="ev=>{$emit('update:sex', ev.target.value)}">
        <option value="male">男</option>
        <option value="female">女</option>
        <option value="other">其他</option>
      </select>
    </td>
    <td>
      <span v-if="!isEditMode">{{ age }}</span>
      <input v-if="isEditMode" type="number" :value="age" @input="ev=>{$emit('update:age', Number(ev.target.value))}">
    </td>
    <td>
      <button v-if="!isEditMode" @click="isEditMode = true">编辑</button>
      <button v-if="isEditMode" @click="submit">确定</button>
    </td>
  </tr>
</template>

<script>

export default {
  emits: ['update:name', 'update:sex', 'update:age'],
  // 组件需要接收的父组件的数据
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    sex: {
      type: String,
      default: 'other'
    },
    age: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isEditMode: false, // 是否处在编辑模式
    };
  },
  methods: {
    submit() {
      this.isEditMode = false;
    }
  }
};
</script>

<style scoped>

</style>