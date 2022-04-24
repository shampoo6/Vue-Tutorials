<script setup>
// 知识点
// 使用a-form和a-form-item来创建表单
//      1. a-form 绑定 model 属性
//      2. a-form-item 设置 label 和 value
//      3. 使用a-button提交和重置表单

import {reactive, ref} from 'vue';

const form = ref(null);

let student = reactive({
  name: '',
  age: 0,
  sex: 'other',
  hobbies: ['ymq'],
  clazz: '',
  desc: '',
  birthday: null
});

function onBirthdayChange(ev) {
  console.log(ev);
  console.log(student.birthday);
}

function reset() {
  console.log(form.value);
  // 重置表单
  form.value.resetFields();
}

function onFinish(values) {
  // 表单提交事件处理程序
  console.log(values);
}
</script>

<template>
  <div>
    <!-- 表单组件
      model 是对应表单的数据对象，此处就是 student
      label-col 文本提示列的样式
      finish 表单提交事件 当 a-button 的 html-type="submit" 时，点击按钮就能触发 finish 事件
     -->
    <a-form @finish="onFinish" ref="form" :label-col="{span: 6}" :model="student" style="width: 350px; padding: 32px;">
      <!-- 每个 a-form-item 是一个表单项
        label 提示文本
        name 表单项对应model中的属性名
       -->
      <a-form-item label="姓名" name="name">
        <a-input type="text" placeholder="请输入姓名" v-model:value="student.name"></a-input>
      </a-form-item>
      <a-form-item label="年龄" name="age">
        <a-input type="number" placeholder="请输入年龄" v-model:value.number="student.age"></a-input>
      </a-form-item>
      <a-form-item label="性别" name="sex">
        <a-radio-group v-model:value="student.sex">
          <a-radio value="male">男</a-radio>
          <a-radio value="female">女</a-radio>
          <a-radio value="other">其他</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="爱好" name="hobbies">
        <a-checkbox-group v-model:value="student.hobbies">
          <a-checkbox value="dlq">打篮球</a-checkbox>
          <a-checkbox value="tzq">踢足球</a-checkbox>
          <a-checkbox value="ymq">羽毛球</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="班级" name="clazz">
        <a-select v-model:value="student.clazz">
          <a-select-option value="" disabled>请选择</a-select-option>
          <a-select-option value="1">一班</a-select-option>
          <a-select-option value="2">二班</a-select-option>
          <a-select-option value="3">三班</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="简介" name="desc">
        <a-textarea v-model:value="student.desc" :rows="4"></a-textarea>
      </a-form-item>
      <a-form-item label="生日" name="birthday">
        <a-date-picker @change="onBirthdayChange" v-model:value="student.birthday"/>
      </a-form-item>

      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <a-space>
            <a-button @click="reset">重置</a-button>
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-form>

    <div>
      <ul>
        <li>name: {{ student.name }}</li>
        <li>age: {{ student.age }}</li>
        <li>sex: {{ student.sex }}</li>
        <li>hobbies: {{ student.hobbies }}</li>
        <li>clazz: {{ student.clazz }}</li>
        <li>desc: {{ student.desc }}</li>
        <li>birthday: {{ student.birthday }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>