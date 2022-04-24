<script setup>

</script>

<template>
  <div>
    <h1>分割线</h1>
    <!-- 水平线 -->
    <a-divider/>
    <a-divider>这是水平线的文本</a-divider>
    <span>
      link1
      <!-- 垂直分割线 -->
      <a-divider type="vertical"/>
      link2
    </span>
    <a-divider orientation="left">左侧文本</a-divider>
    <a-divider orientation="right">右侧文本</a-divider>


    <h1>Layout布局组件</h1>
    <!-- https://www.antdv.com/components/layout-cn -->

    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>

    <h1>栅格</h1>
    <!-- https://www.antdv.com/components/grid-cn -->

    <a-row>
      <a-col :span="8">1-1</a-col>
      <a-col :span="8">1-2</a-col>
      <a-col :span="8">1-3</a-col>
    </a-row>
    <a-row>
      <a-col :span="8">2-1</a-col>
      <a-col :span="8">2-2</a-col>
      <a-col :span="8">2-3</a-col>
    </a-row>
    <a-row>
      <a-col :span="8">3-1</a-col>
      <a-col :span="8">3-2</a-col>
      <a-col :span="8">3-3</a-col>
    </a-row>

    <!-- 间隔 -->
<!--    <a-row :gutter="100">-->
    <!-- 可以绑一个数组，第一个成员代表水平间距，第二个代表垂直间距 -->
    <a-row :gutter="[100, 10]">
      <a-col :span="8">1-1</a-col>
      <a-col :span="8">1-2</a-col>
      <a-col :span="8">1-3</a-col>

      <a-col :span="8">1-1</a-col>
      <a-col :span="8">1-2</a-col>
      <a-col :span="8">1-3</a-col>
    </a-row>

    <!-- 偏移 -->
    <a-row :gutter="[100, 10]">
      <a-col :span="8" :offset="8">1-1</a-col>
    </a-row>

    <h1>space 间距</h1>

    <a-space>
      <a-button>按钮1</a-button>
      <a-button>按钮2</a-button>
      <a-button>按钮3</a-button>
    </a-space>

    <a-space direction="vertical" :size="100">
      <a-button>按钮1</a-button>
      <a-button>按钮2</a-button>
      <a-button>按钮3</a-button>
    </a-space>
  </div>
</template>

<style scoped>

</style>