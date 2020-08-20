<template>
    <div>
        <el-row>
            <h3>图书表</h3>
        </el-row>
        <el-row>
            <el-table height="250" :data="tableData" border stripe @selection-change="onSelectionChange">
                <el-table-column type="selection"/>
                <el-table-column prop="id" label="序号"/>
                <el-table-column prop="name" label="书名"/>
                <el-table-column prop="author" label="作者"/>
                <el-table-column prop="type" label="类型"/>
                <el-table-column prop="description" label="描述"/>
                <el-table-column prop="price" label="价格">
                    <template slot-scope="scope">
                        <span :style="{ 'font-size': scope.row.price<100? '14px': (scope.row.price>=100&&scope.row.price<200?'20px': '26px') }">{{scope.row.price}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="publishTime" label="发售日">
                    <template slot-scope="myscope">
                        {{myscope.row.publishTime|dateFormatter}}
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right">
                    <template>
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row style="text-align: center">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pager.page"
                    :page-sizes="[5, 10, 20]"
                    :page-size="pager.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pager.total"/>
        </el-row>
    </div>
</template>

<script>

    // 先创建基础表
    // 增加自定义模板
    // 增加过滤器
    // 加龙头凤尾

    // 加分页

    export default {
        name: "Table",
        data() {
            return {
                tableData: this.$store.state.tableData.data,
                selection: [],
                pager: {
                    page: 1,
                    size: 5,
                    total: this.$store.state.tableData.total
                }
            }
        },
        methods: {
            page() {
                this.$store.dispatch('a_tablePage').then(resp => {
                    this.tableData = resp.data
                    this.pager.total = resp.total
                })
            },
            onSelectionChange(selection) {
                console.log(selection)
                this.selection = selection
            },
            handleSizeChange(size) {
                this.pager.size = size
                this.page()
            },
            handleCurrentChange(page) {
                this.pager.page = page
                this.page()
            }
        },
        filters: {
            dateFormatter(value) {
                let d = new Date(value)
                let year = d.getFullYear()
                let month = d.getMonth() + 1
                let day = d.getDate()
                return `${year}-${month}-${day}`
            }
        }
    }
</script>

<style scoped>

</style>
