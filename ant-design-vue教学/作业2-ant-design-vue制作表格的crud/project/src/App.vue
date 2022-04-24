<template>
  <a-layout>
    <a-layout-content>
      <a-row>
        <a-col :span="24">
          <!-- 工具栏 -->
          <a-button type="primary" @click="add">+</a-button>
          <a-button type="danger" @click="remove">批量删除</a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-table :data-source="tableData" :columns="columns" row-key="id"
                   :row-selection="rowSelection"
                   :pagination="pagination"
                   @change="tableChange"
          >
            <template #bodyCell="{column, record}">
              <template v-if="column.key === 'sex'">
                {{
                  record.sex === 'male' ?
                      '男' :
                      record.sex === 'female' ?
                          '女' : '其他'
                }}
              </template>
              <template v-if="column.key === 'op'">
                <a-button @click="edit(record.id)">编辑</a-button>
                <a-button type="danger" @click="removeOne(record.id)">删除</a-button>
              </template>
            </template>

          </a-table>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" v-show="showForm">
          <!-- 表单 -->
          <h1>{{ title }}</h1>
          <a-card style="width: 500px; padding: 32px">
            <a-form ref="form" :label-col="{span: 6}" :model="student" :rules="rules">
              <a-form-item v-if="student.id" label="id" name="id">
                <a-input v-model:value="student.id" readonly></a-input>
              </a-form-item>
              <a-form-item label="姓名" name="name">
                <a-input v-model:value="student.name"></a-input>
              </a-form-item>
              <a-form-item label="性别" name="sex">
                <a-radio-group v-model:value="student.sex">
                  <a-radio value="male">男</a-radio>
                  <a-radio value="female">女</a-radio>
                  <a-radio value="other">其他</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="分数" name="score">
                <a-input type="number" v-model:value.number="student.score"></a-input>
              </a-form-item>
              <a-form-item label="班级" name="clazz">
                <a-select v-model:value="student.clazz">
                  <a-select-option value="" disabled>请选择</a-select-option>
                  <a-select-option value="1">一班</a-select-option>
                  <a-select-option value="2">二班</a-select-option>
                  <a-select-option value="3">三班</a-select-option>
                </a-select>
              </a-form-item>
              <a-row :gutter="[0, 24]">
                <a-col :span="6"></a-col>
                <a-col :span="18">
                  <a-button style="width: 100%" type="primary" @click="submit">提交</a-button>
                </a-col>
                <a-col :span="6"></a-col>
                <a-col :span="18">
                  <a-button style="width: 100%" @click="cancel">取消</a-button>
                </a-col>
              </a-row>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>

// 默认表格数据
const defaultTableData = [
  {
    id: 0,
    name: '张三',
    sex: 'male',
    score: 60,
    clazz: '1'
  },
  {
    id: 1,
    name: '李四',
    sex: 'female',
    score: 80,
    clazz: '2'
  },
  {
    id: 2,
    name: '老王',
    sex: 'other',
    score: 50,
    clazz: '3'
  },
].sort((item1, item2) => {
  return item2.id - item1.id;
});

// 表单标题
const addTitle = '添加学生';
const editTitle = '编辑学生';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      id: 3, // 用于添加数据时生成id
      showForm: false,
      title: addTitle,
      selectedIds: [],
      // tableData: defaultTableData,
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id'
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
          title: '分数',
          dataIndex: 'score',
          key: 'score'
        },
        {
          title: '班级',
          dataIndex: 'clazz',
          key: 'clazz'
        },
        {
          title: '操作',
          key: 'op'
        },
      ],
      rowSelection: {
        // 当选择项发生变化时触发的事件
        onChange: (selectedRowKeys, selectedRows) => {
          console.log('onChange');
          console.log(selectedRowKeys); // 被选中的 key 列表
          console.log(selectedRows); // 被选中的行数据

          this.selectedIds = selectedRowKeys;
        },
      },
      pagination: {
        position: ['bottomCenter'], // 位置
        current: 1, // 当前页
        defaultPageSize: 2, // 默认每页显示多少条数据
        pageSize: 2, // 当前每页显示多少条数据1
        pageSizeOptions: ['1', '2'], // 每页显示数据量的选项
        showQuickJumper: true, // 是否显示快捷跳转框
        showSizeChanger: true, // 是否显示每页显示数量的选项框
        total: 0, // 总数据量
        showTotal: (total, range) => {
          return `共 ${total} 条`; // 返回的内容将显示到分页上
        }
      },
      student: {
        id: null, // 表单中存在id，若id值存在，便说明现在是编辑操作
        name: '',
        sex: 'other',
        score: 0,
        clazz: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名'
          },
        ],
        score: [
          {
            validator: (_rules, value) => {
              if (value < 0 || value > 100) return Promise.reject('请填入0~100的分数');
              return Promise.resolve();
            },
          }
        ],
        clazz: [
          {
            required: true,
            message: '请选择班级'
          }
        ]
      }
    };
  },
  watch: {
    tableData(newValue, oldValue) {
      // 通过监听器 修改总数据量
      this.pagination.total = newValue.length;
    }
  },
  computed: {
    tableData() {
      return this.$store.state.tableData;
    }
  },
  methods: {
    removeOne(id) {
      // let i = this.tableData.findIndex(stu => stu.id === id);
      // this.tableData.splice(i, 1);

      this.$store.dispatch('remove', [id]);
    },
    remove() {
      if (this.selectedIds.length === 0) return;
      // this.tableData = this.tableData.filter(row => !this.selectedIds.includes(row.id));
      this.$store.dispatch('remove', this.selectedIds);
    },
    tableChange(p) {
      this.pagination.current = p.current;
      this.pagination.pageSize = p.pageSize;
    },
    cancel() {
      // 清空数据
      this.$refs.form.resetFields();
      // 隐藏
      this.showForm = false;
    },
    add() {
      // 修改标题
      this.title = addTitle;
      // 显示表单
      this.showForm = true;
    },
    edit(id) {
      // 修改标题
      this.title = editTitle;
      // 回显数据
      const stu = this.tableData.find(stu => stu.id === id);
      // 拷贝属性
      for (const key in this.student) {
        this.student[key] = stu[key];
      }
      // 显示表单
      this.showForm = true;
    },
    submit() {
      // 手动验证表单
      this.$refs.form.validate().then(() => {
        // 执行添加或编辑逻辑
        // console.log('ok');

        // 克隆表单数据
        let stu = {...this.student};

        // 区分业务，到底是添加操作还是编辑操作
        if (this.student.id) {
          // 编辑操作
          // let stu = this.tableData.find(stu => stu.id === this.student.id); // 找到要修改的数据对象
          // for (const key in stu) {
          //   stu[key] = this.student[key];
          // }

          this.$store.dispatch('updateStudent', stu);
        } else {
          // 添加操作
          stu.id = this.id++;
          // this.tableData.unshift(stu);
          this.$store.dispatch('addStudent', stu);
        }
      }).catch(reason => {
        console.error(reason);
      }).finally(() => {
        // 关闭表单
        this.cancel();
      });
    }
  }
};
</script>

<style>
</style>
