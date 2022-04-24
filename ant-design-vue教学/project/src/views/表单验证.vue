<script setup>
// 知识点
// 表单验证
//      1. a-form 设置 rules
//      2. rules 中添加要验证的验证规则 rules 对象中属性请参考 https://www.antdv.com/components/form-cn#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99
//      3. validator 自定义验证器的使用
//      4. form.validate 函数进行手动验证

import {reactive, ref} from 'vue';

const form = ref(null);

let student = reactive({
  name: '',
  age: 0,
  hobbies: []
});

// 验证规则
const rules = {
  // key: 要验证的属性名
  // value: 校验规则数组
  name: [
    // 每个数组成员都是一个校验规则
    // 验证规则请参考：https://www.antdv.com/components/form-cn#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99
    {
      required: true, // 是否必填
      trigger: 'blur', // 触发验证的事件
      message: '请填写姓名' // 错误信息
    },
    {
      min: 2, // 最小长度
      max: 20, // 最大长度
      trigger: 'blur',
      message: '请输入2~20个字的姓名'
    }
  ],
  age: [
    {
      // 指定自定义验证器
      validator: checkAge,
      trigger: 'blur',
      // type: 'phone', // email
      // message: '请输入0~200的年龄'
    }
  ],
  hobbies: [
    {
      validator: checkHobbies,
      // trigger: 'change'
    }
  ]
};

// 提交
function submit(values) {
  // values 提交的数据
  console.log(values);
}

function manualSubmit(){
  // 调用表单方法触发验证
  form.value.validate().then(() => {
    // 验证通过触发 then
    console.log('then');
  }).catch(reason => {
    // 验证失败触发 catch
    console.error(reason);
  });
}

// 提交失败
function fail(errors) {
  // errors 失败原因
  console.log(errors);
}

// 自定义验证器
// 验证年龄
// 自定义验证器需要返回一个 promise 对象
function checkAge(_rules, value) {
  // _rules 验证规则对象
  // value 用户输入的数据
  console.log(_rules);
  console.log(value);

  // 验证失败 reject 函数可以传入错误信息
  // reject 的错误信息会和 验证规则中的 message 冲突，所以二者之间请选择一个
  if (value < 0 || value > 200) return Promise.reject('年龄验证失败');

  return Promise.resolve(); // 验证成功
}

function checkHobbies(_rules, value) {
  if (!Array.isArray(value)) return Promise.reject('请选择爱好');
  if (value.length < 2) return Promise.reject('请选择至少2种爱好');
  return Promise.resolve();
}
</script>

<template>
  <div>
    <!-- 表单验证需要给表单绑定一个rules属性
      rules属性代表验证规则
     -->
    <a-form ref="form" :label-col="{span: 6}" :model="student" style="width: 350px; padding: 32px;" :rules="rules"
            @finish="submit"
            @finishFaild="fail">
      <a-form-item label="姓名" name="name">
        <a-input type="text" placeholder="请输入姓名" v-model:value="student.name"></a-input>
      </a-form-item>
      <a-form-item label="年龄" name="age">
        <a-input type="number" placeholder="请输入年龄" v-model:value.number="student.age"></a-input>
      </a-form-item>
      <a-form-item label="爱好" name="hobbies">
        <a-checkbox-group v-model:value="student.hobbies">
          <a-checkbox value="dlq">打篮球</a-checkbox>
          <a-checkbox value="tzq">踢足球</a-checkbox>
          <a-checkbox value="ymq">羽毛球</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <a-space>
            <a-button>重置</a-button>
            <a-button type="primary" html-type="submit">html submit 提交</a-button>
            <a-button type="primary" @click="manualSubmit">手动提交</a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-form>

    <div>
      <ul>
        <li>name: {{ student.name }}</li>
        <li>age: {{ student.age }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>