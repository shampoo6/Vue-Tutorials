<script setup>
import {reactive, inject} from 'vue';
import {useRouter} from 'vue-router';

const emit = defineEmits(['themeChange']);

const theme = inject('theme', 'light');

const router = useRouter();

const btns = reactive([
  {text: '页面一', active: true, url: '/page1'}, // url 用来描述按钮跳转的路径
  {text: '页面二', active: false, url: '/page2'},
  {text: '页面三', active: false, url: '/page3'},
]);

// 切换页面
function switchPage(i) {
  let url;
  btns.forEach((btn, index) => {
    btn.active = index === i;
    if (index === i) url = btn.url;
  });

  // 跳转页面
  router.push(url);
}

function themeChange(ev) {
  console.log(ev.target.checked);
  emit('themeChange', ev.target.checked ? 'dark' : 'light');
}
</script>

<template>
  <div :class="'d-flex flex-row justify-content-between align-items-center border-bottom ' +
  (theme === 'light'? 'text-dark bg-light': 'text-light bg-dark')
">
    <div>
      <ul class="nav">
        <li class="nav-item" v-for="(btn, index) in btns" :key="btn.url">
          <a :class="'nav-link' + (btn.active? 'active': '')" aria-current="page" href="#"
             @click="switchPage(index)">{{ btn.text }}</a>
        </li>
      </ul>
    </div>
    <div>
      <div class="form-check form-switch">
        <input @change="themeChange" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">夜间模式</label>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>