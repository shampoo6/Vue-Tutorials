<script setup>
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {ref, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

const store = useStore();
const router = useRouter();

const form = ref(null);

const formData = reactive({
  account: '',
  pwd: ''
});

function toSignUp() {
  router.push('/signUp');
}

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
};

function signIn() {
  form.value.validate().then(() => {
    // 对比 store 里面的数据
    if (formData.account === store.state.account && formData.pwd === store.state.pwd) {
      alert('pass');
    } else {
      alert('账号或密码错误')
    }
  }).catch(reason => {
    console.error(reason);
  });
}

</script>

<template>
  <div style="display:flex; flex-direction: column; height: 100vh;">
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240); flex-shrink: 0;"
        title="登录"
    />
    <a-layout style="flex-grow: 1;">
      <a-layout-content style="display: flex; justify-content: center;">
        <div style="padding-top: 64px;">
          <a-card title="登录" style="width: 500px">
            <template #extra><a href="#">忘记密码?</a></template>

            <a-form ref="form" :model="formData" :rules="rules">
              <a-form-item name="account">
                <a-input v-model:value="formData.account">
                  <template #prefix>
                    <user-outlined type="user"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item name="pwd">
                <a-input v-model:value="formData.pwd">
                  <template #prefix>
                    <lock-outlined/>
                  </template>
                </a-input>
              </a-form-item>
              <a-row :gutter="[0, 24]">
                <a-col :span="24">
                  <a-button style="width: 100%" type="primary" @click="signIn">登录</a-button>
                </a-col>
                <a-col :span="24">
                  <a-button style="width: 100%" @click="toSignUp">注册</a-button>
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