<script setup>
import {DownOutlined} from '@ant-design/icons-vue';
import {MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons-vue';
import {reactive, ref} from 'vue';

function switchPage(ev) {
  let url = ev.target.getAttribute('data-url');
  console.log(url);
}

const openKeys = reactive(['g1']);
const selectedKeys = reactive(['2']);

function handleClick({item, key, keyPath}) {
  console.log(item);
  console.log(key);
  console.log(keyPath);
}

function titleClick({key, domEvent}) {
  console.log(key);
  console.log(domEvent);
}

function onBack() {
  console.log('back');
}
</script>

<template>
  <div>
    <h1>下拉菜单</h1>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        Hover me
        <DownOutlined/>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;" data-url="/page1" @click="switchPage">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

    <h1>菜单</h1>
    <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px"
        mode="inline"
        @click="handleClick"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template #icon>
          <MailOutlined/>
        </template>
        <template #title>Navigation One</template>
        <a-menu-item-group key="g1">
          <template #icon>
            <QqOutlined/>
          </template>
          <template #title>Item 1</template>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #icon>
          <AppstoreOutlined/>
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon>
          <SettingOutlined/>
        </template>
        <template #title>Navigation Three</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>

    <h1>页头</h1>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="标题"
        sub-title="子标题"
        @back="onBack"
    />
  </div>
</template>

<style scoped>

</style>