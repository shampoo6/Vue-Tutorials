<script setup>
import {ref} from 'vue';
import {UserOutlined} from '@ant-design/icons-vue';

const activeKey = ref(['1']);
const activeKey2 = ref('1');

const data = [{
  title: 'Ant Design Title 1',
}, {
  title: 'Ant Design Title 2',
}, {
  title: 'Ant Design Title 3',
}, {
  title: 'Ant Design Title 4',
}];

function onSwiperChange(current) {
  console.log(current);
}
</script>

<template>
  <div>
    <h1>头像</h1>
    <a-avatar :size="64">
      <template #icon>
        <UserOutlined/>
      </template>
    </a-avatar>
    <h1>徽标</h1>
    <a-badge count="5">
      <a-avatar shape="square" size="large"/>
    </a-badge>
    <h1>卡片</h1>
    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
      </template>
      <a-card-meta title="Europe Street beat">
        <template #description>www.instagram.com</template>
      </a-card-meta>
    </a-card>
    <h1>走马灯</h1>
    <a-carousel :after-change="onSwiperChange">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>

    <h1>折叠面板</h1>
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>1</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2">
        <p>2</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
        <p>3</p>
      </a-collapse-panel>
    </a-collapse>

    <h1>列表</h1>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>

    <h1>气泡卡片</h1>
    <a-popover title="Title">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button type="primary">Hover me</a-button>
    </a-popover>

    <h1>文本提示</h1>
    <a-tooltip>
      <template #title>prompt text</template>
      Tooltip will show when mouse enter.
    </a-tooltip>

    <h1>tabs选项卡</h1>
    <a-tabs v-model:activeKey="activeKey2">
      <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>