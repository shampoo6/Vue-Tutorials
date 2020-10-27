<template>
    <div>
        <!-- 使用el-table创建表格 -->
        <!-- 绑定data属性，data属性代表我们表格要渲染的数据 -->
        <!-- 使用border增加表格边框 -->
        <!-- 使用stripe增加表格中的斑马纹 -->
        <!-- 为了获取复选框内容，需要绑定selection-change事件，该事件在选项发生变化时，被触发 -->
        <el-table :data="tableData" border stripe @selection-change="onSelectionChange">
            <!--使用el-table-column显示表格列-->
            <!-- prop属性代表要渲染的数据字段名称 -->
            <!-- label表示表头显示的内容 -->
            <el-table-column type="selection"></el-table-column> <!-- 添加复选框 -->
            <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="account" label="账号"></el-table-column>
            <el-table-column prop="nickName" label="昵称"></el-table-column>
            <el-table-column prop="sex" label="性别">
                <template slot-scope="scope">
                    <span :style="{color:scope.row.sex==='female'?'pink':'blue'}">{{scope.row.sex==='female'?'女':'男'}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
                <!-- 使用作用域插槽获取每行信息 -->
                <template slot-scope="scope">
                    {{scope.row.createTime|dateFormatter}}
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间">
                <template slot-scope="scope">
                    {{scope.row.updateTime|dateFormatter}}
                </template>
            </el-table-column>
            <!-- 一般来说，每个表格最后都有一个'操作'列 -->
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini">编辑</el-button>
                    <el-button type="danger" size="mini" @click="remove(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <!-- page-sizes 作用是改变每页显示条数的下拉框选项 -->
        <!-- layout 用于给分页组件中的子组件进行布局 -->
        <!-- current-change事件：当 当前页 发生变化时，触发该事件 -->
        <!-- size-change事件：当每页显示条数发生变化时，触发该事件 -->
        <el-pagination
                @current-change="onPageChange"
                @size-change="onSizeChange"
                :current-page="pager.page"
                :page-size="pager.size"
                :page-sizes="[3, 5, 10, 30]"
                layout="total, ->, sizes, prev, pager, next, jumper"
                :total="pager.total"
        ></el-pagination>
    </div>
</template>

<script>
    import moment from 'moment'

    const testData = [
        {
            id: 0,
            account: 'account1',
            nickName: 'nickName1',
            sex: 'male',
            createTime: Date.now(),
            updateTime: Date.now()
        },
        {
            id: 1,
            account: 'account2',
            nickName: 'nickName2',
            sex: 'male',
            createTime: Date.now(),
            updateTime: Date.now()
        },
        {
            id: 2,
            account: 'account3',
            nickName: 'nickName3',
            sex: 'male',
            createTime: Date.now(),
            updateTime: Date.now()
        },
        {
            id: 3,
            account: 'account4',
            nickName: 'nickName4',
            sex: 'female',
            createTime: Date.now(),
            updateTime: Date.now()
        },
        {
            id: 4,
            account: 'account5',
            nickName: 'nickName5',
            sex: 'female',
            createTime: Date.now(),
            updateTime: Date.now()
        },
    ]

    export default {
        name: 'TableAndPager',
        data() {
            return {
                tableData: testData, // 表格数据
                selection: [], // 复选框，选中项
                pager: { // 声明分页数据对象
                    page: 1, // 当前页
                    size: 5, // 每页显示条数
                    total: 500 // 总记录数
                }
            }
        },
        methods: {
            // onSelectionChange事件接收一个selection参数，该参数代表所选项
            onSelectionChange(selection) {
                console.log(selection)
                // 给数据赋值
                this.selection = selection
            },
            remove(id) {
                // 非空判断
                id = String(id)
                if (!id || id.trim() === '') return
                this.$confirm('请确定你知道自己在干什么，真的要删除么？', '删除', {
                    type: 'warning',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    callback: (op) => {
                        if (op === 'confirm') {
                            this.$message.success('删除成功 id为' + id + ' 的项目')
                        }
                    }
                })
            },
            // onPageChange 接收一个page参数，该参数代表新的当前页
            onPageChange(page) {
                // 给pager.page赋值
                this.pager.page = page
                console.log(this.pager)
            },
            // onSizeChange 接收一个size参数，该参数代表新的每页显示条数
            onSizeChange(size) {
                this.pager.size = size
                console.log(this.pager)
            }
        },
        filters: {
            'dateFormatter': (value) => {
                // 使用moment.js，格式化数字类型的时间
                return moment(value).format('yyyy-MM-DD HH:mm:ss')
            }
        }
    }
</script>

<style scoped>

</style>