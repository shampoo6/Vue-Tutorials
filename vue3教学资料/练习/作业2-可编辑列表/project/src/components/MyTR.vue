<template>
  <tr>
    <td>
      <!--   页面将根据是否处在编辑模式中来渲染不同的元素   -->
      <!--  非编辑模式  -->
      <span v-if="!isEditMode">{{ name }}</span>
      <!--  编辑模式  -->
      <input v-if="isEditMode" type="text" v-model="user.name">
    </td>
    <td>
      <span v-if="!isEditMode">{{
          sex === 'male' ?
              '男' :
              sex === 'female' ?
                  '女' : '其他'
        }}</span>
      <select v-if="isEditMode" v-model="user.sex">
        <option value="male">男</option>
        <option value="female">女</option>
        <option value="other">其他</option>
      </select>
    </td>
    <td>
      <span v-if="!isEditMode">{{ age }}</span>
      <input v-if="isEditMode" type="number" v-model.number="user.age">
    </td>
    <td>
      <button v-if="!isEditMode" @click="isEditMode = true">编辑</button>
      <button v-if="isEditMode" @click="submit">确定</button>
      <button v-if="isEditMode" @click="cancel">取消</button>
    </td>
  </tr>
</template>

<script>
export default {
  emits: ['onSubmit'],
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
      user: {
        id: this.id,
        name: this.name,
        sex: this.sex,
        age: this.age
      }
    };
  },
  methods: {
    cancel() {
      // 重置数据为父组件传入的props
      this.user.name = this.name;
      this.user.sex = this.sex;
      this.user.age = this.age;
      this.isEditMode = false;
    },
    submit() {
      // 因为数据来自于父组件，不能直接修改props
      // 所以需要通过事件，通知父组件修改
      this.$emit('onSubmit', this.user);
      this.isEditMode = false;
    }
  }
};
</script>

<style scoped>

</style>