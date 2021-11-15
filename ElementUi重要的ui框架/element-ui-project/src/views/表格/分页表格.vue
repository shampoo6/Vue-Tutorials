<template>
    <div>
        <el-row>
            <h1>自定义模板</h1>
            <el-table height="250" :data="table.data" stripe border>
                <el-table-column fixed width="150" prop="name" label="姓名"/>
                <el-table-column prop="sex" label="性别">
                    <!-- 自定义模板使用作用域插槽 -->
                    <template slot-scope="scope">
                        {{scope.row.sex|sexFormatter}}
                    </template>
                </el-table-column>
                <!-- 在一列上加上 show-overflow-tooltip 属性 可以让该列呈现单行显示 超出部分显示为省略号 -->
                <el-table-column width="800" show-overflow-tooltip prop="desc" label="简介"/>
            </el-table>
        </el-row>
        <el-row>
            <!-- 分页工具
                current-page: 当前页
                page-sizes: 每页显示多少条数据的选项
                page-size: 当前表格每页显示几条数据
                total: 总数据量
                layout: 用于决定显示哪些分页工具并且决定每个工具的位置
                size-change: 当每页显示多少条数据选项发生变化时触发的事件
                current-change: 当前页发生变化事件
             -->
            <el-pagination
                    @size-change="onSizeChange"
                    @current-change="onPageChange"
                    :current-page="table.pager.page"
                    :page-sizes="table.pager.sizeOptions"
                    :page-size="table.pager.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="table.pager.total">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    // 构造假数据
    const buildData = (count) => {
        let result = []
        let id = 0
        let names = ['张三', '李四', '王五']
        let sexs = ['male', 'female', 'other']
        for (let i = 0; i < count; i++) {
            result.push({
                id,
                name: names[Math.floor(Math.random() * 3000) % names.length] + id,
                sex: sexs[Math.floor(Math.random() * 3000) % sexs.length],
                desc: '奥利弗根据二案例奥利弗根据二案例奥利弗根据二案例奥利弗根据二案例奥利弗根据二案例奥利弗根据二案例奥利弗根据二案例'
            })
            id++
        }
        return result
    }

    let tableData = buildData(100)

    export default {
        name: 'PaginationTable',
        data() {
            return {
                table: {
                    data: tableData,
                    pager: { // pager对象用于存放分页工具所需的数据
                        page: 1, // 当前页
                        total: 500, // 总数据量
                        size: 5, // 每页显示几条数据
                        sizeOptions: [5, 10, 20, 50] // 每页显示数量的选项
                    }
                }
            }
        },
        created() {
            this.query()
        },
        methods: {
            // 查询列表
            query() {
                // 要跳过多少条数据不显示
                let skip = (this.table.pager.page - 1) * this.table.pager.size
                // 显示多少条数据
                let limit = this.table.pager.size
                // 克隆数据
                let arr = [...tableData]
                // 给列表数据赋值
                this.table.data = arr.splice(skip, limit)
                // 给数据总量赋值
                this.table.pager.total = tableData.length
            },
            // size 变化时触发该函数
            // 接受一个变量 size 该变量为新的 size 值
            onSizeChange(size) {
                console.log(size)
                // 保存size
                this.table.pager.size = size
                // 通常在此处可以发起网络请求 通过新的 size 重新获取列表
                this.query()
            },
            // 当前页变化时触发该函数
            onPageChange(page) {
                console.log(page)
                // 保存 page
                this.table.pager.page = page
                // 通常在此处可以发起网络请求 通过新的 page 重新获取列表
                this.query()
            }
        }
    }
</script>

<style scoped>

</style>
