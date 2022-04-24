<script setup>
// 知识点
// 基础表格的创建
//    1. 绑定 dataSource 和 columns 属性
//    2. 修改自定义 rowKey
// 自定义单元格
// checkbox 多行选择
// 分页表格

import {ref, reactive} from 'vue';

// 声明表格数据
const tableData = ref(reactive([
  {
    id: 1,
    name: '张三',
    sex: 'male',
    clazz: '一班',
    info: {
      balance: 10
    }
  },
  {
    id: 2,
    name: '李四',
    sex: 'female',
    clazz: '二班',
    info: {
      balance: 20
    }
  },
  {
    id: 3,
    name: '老王',
    sex: 'other',
    clazz: '三班',
    info: {
      balance: 30
    }
  },
]));

// 列的描述信息
const columns = [
  {
    title: '序号',
    dataIndex: 'id', // 当前列对应数据的哪个属性
    key: 'id' // 列名的唯一标识 不同列的 key 不同
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: '班级',
    dataIndex: 'clazz',
    key: 'clazz'
  },
  {
    title: '余额',
    dataIndex: ['info', 'balance'], // dataIndex 可以是一个数组 描述数据路径
    key: 'balance'
  },
  {
    title: '操作',
    key: 'op'
  }
];

// checkbox 选项配置
const rowSelection = ref({
  // checkStrictly: false,

  // 当选择项发生变化时触发的事件
  // onChange: (selectedRowKeys, selectedRows) => {
  //   console.log('onChange');
  //   console.log(selectedRowKeys); // 被选中的 key 列表
  //   console.log(selectedRows); // 被选中的行数据
  // },
  // // 选择事件
  // onSelect: (record, selected, selectedRows) => {
  //   console.log('onSelect');
  //   // record 所选行的数据
  //   // selected 是否被选中
  //   // selectedRows 被选中的行
  //   console.log(record, selected, selectedRows);
  // },
  // 全选事件
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log('onSelectAll');
    // selected 是否全选
    // selectedRows 全选的所有行数据
    // changeRows 选择变化的行数
    console.log(selected, selectedRows, changeRows);
  },
});

// https://www.antdv.com/components/table-cn#pagination
// 分页配置
const pagination = reactive({
  position: ['bottomCenter'], // 位置
  // 其余配置参考 pagination
  // https://www.antdv.com/components/pagination-cn/#API
  current: 2, // 当前页
  defaultPageSize: 2, // 默认每页显示多少条数据
  pageSize: 2, // 当前每页显示多少条数据1
  pageSizeOptions: ['1', '2'], // 每页显示数据量的选项
  showQuickJumper: true, // 是否显示快捷跳转框
  showSizeChanger: true, // 是否显示每页显示数量的选项框
  total: tableData.value.length, // 总数据量
  showTotal: (total, range)=>{
    // 显示总数据量
    console.log(total); // 总数据量
    console.log(range);
    return `共 ${total} 条` // 返回的内容将显示到分页上
  }
});


function onTableChange(_pagination, filters, sorter, {currentDataSource}) {
  console.log(_pagination); // 分页改变后的信息
  console.log(filters);
  console.log(sorter);
  console.log(currentDataSource);

  pagination.current = _pagination.current;
  pagination.pageSize = _pagination.pageSize;
}
</script>

<template>
  <div>
    <h1>学生信息表</h1>
    <h2>基础表格</h2>
    <!-- data-source 数据源
      columns 列配置
      row-key 每一行数据的唯一键名
     -->
    <a-table :data-source="tableData" :columns="columns" row-key="id"></a-table>

    <h2>自定义单元格</h2>
    <a-table :data-source="tableData" :columns="columns" row-key="id">
      <!-- 使用作用域插修改表头 -->
      <!-- 此处的 column 变量是作用域插槽暴露给父组件的列信息
        headerCell 表头的插槽名
       -->
      <template v-slot:headerCell="{column}">
        <template v-if="column.key === 'sex'">
          <span style="color: red">性别</span>
        </template>
      </template>

      <!-- column 列信息
        record 行数据
        bodyCell 表单元格的插槽名
       -->
      <template #bodyCell="{column, record}">
        <template v-if="column.key === 'sex'">
          {{
            record.sex === 'male' ?
                '男' :
                record.sex === 'female' ?
                    '女' : '其他'
          }}
        </template>

        <template v-else-if="column.key === 'op'">
          <a-button>编辑</a-button>
          <a-button type="danger">删除</a-button>
        </template>
      </template>
    </a-table>


    <h2>多行选择</h2>
    <!-- row-selection 是checkbox选项的配置 -->
    <a-table :data-source="tableData" :columns="columns" row-key="id" :row-selection="rowSelection"></a-table>

    <h2>分页表格</h2>
    <!--
      pagination 分页配置
      change 表格变化事件，其中包含了分页变化参数
    -->
    <a-table :data-source="tableData" :columns="columns" row-key="id" :pagination="pagination"
             @change="onTableChange"></a-table>
  </div>
</template>

<style scoped>

</style>