<script setup>
import {reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

const store = useStore();
const router = useRouter();

const form = ref(null);

const formData = reactive({
  account: '',
  pwd: '',
  twice: ''
});

const rules = {
  account: [
    {
      required: true,
      message: '请输入账号'
    },
    {
      min: 6,
      max: 10,
      message: '请输入6~10位的账号'
    },
    {
      pattern: /^[A-Za-z0-9]*$/,
      message: '请输入由英文字母和数字构成的账号'
    }
  ],
  pwd: [
    {
      required: true,
      message: '请输入密码'
    },
    {
      min: 6,
      max: 10,
      message: '请输入6~10位的密码'
    },
    {
      pattern: /^\w*$/,
      message: '请输入由下划线、英文字母和数字构成的密码'
    }
  ],
  twice: [
    {
      validator: confirmPwd,
      message: '两次输入的密码不一致'
    }
  ]
};

function confirmPwd(_rules, value) {
  if (value === formData.pwd) {
    return Promise.resolve();
  }
  return Promise.reject();
}

function signUp() {
  form.value.validate().then(() => {
    console.log('pass');
    // 验证通过
    store.dispatch('aAccount', formData.account);
    store.dispatch('aPwd', formData.pwd);
    router.replace('/');
  }).catch(reason => {
    console.error(reason);
  });
}

</script>

<template>
  <div style="display:flex; flex-direction: column; height: 100vh;">
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240); flex-shrink: 0;"
        title="注册"
        @back="router.back()"
    />
    <a-layout style="flex-grow: 1;">
      <a-layout-content style="display: flex; justify-content: center;">
        <div style="padding-top: 64px;">
          <a-card title="注册" style="width: 500px">
            <template #extra><a href="#">已有账号</a></template>

            <a-form ref="form" :label-col="{span: 6}" :model="formData" :rules="rules">
              <a-form-item label="账号" name="account">
                <a-input v-model:value="formData.account"></a-input>
              </a-form-item>
              <a-form-item label="密码" name="pwd">
                <a-input v-model:value="formData.pwd"></a-input>
              </a-form-item>
              <a-form-item label="确认密码" name="twice">
                <a-input v-model:value="formData.twice"></a-input>
              </a-form-item>
              <a-row :gutter="[0, 24]">
                <a-col :span="24">
                  <a-button style="width: 100%" @click="signUp" type="primary">注册</a-button>
                </a-col>
              </a-row>
            </a-form>
          </a-card>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>
.ant-layout-header {
  background-color: #fff;
}
</style>