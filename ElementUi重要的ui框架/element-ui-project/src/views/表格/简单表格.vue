<template>
    <div>
        <!--<el-row>
            <h1>简单表格</h1>
            &lt;!&ndash; 创建表格并绑定数据到data属性 &ndash;&gt;
            &lt;!&ndash; stripe 斑马纹
                border 边框
            &ndash;&gt;
            <el-table :data="table1.data" stripe border>
                &lt;!&ndash; 创建表格列 &ndash;&gt;
                <el-table-column width="150px" prop="name" label="姓名"/>
                <el-table-column prop="sex" label="性别"/>
            </el-table>
        </el-row>-->

        <el-row>
            <!-- height 属性可以指定表格高度 当数据大于此高度后将产生滚动条 且 表头固定 -->
            <h1>固定表头和列</h1>
            <el-table height="200" :data="table1.data" stripe border>
                <!-- fixed 属性用于固定列 带选项：
                    left ： 固定在左侧
                    right： 固定在右侧
                 -->
                <el-table-column fixed="left" width="150" prop="name" label="姓名"/>
                <el-table-column width="800" prop="sex" label="性别"/>
            </el-table>
        </el-row>

        <el-row>
            <h1>全选按钮</h1>
            <!-- 若要获取用户多选的内容 需要在表格上绑定事件 selection-change -->
            <el-table height="200" :data="table1.data" stripe border
                      @selection-change="onSelectionChange">
                <!-- 表格第一列 增加一列checkbox按钮 -->
                <el-table-column type="selection" width="50"/>
                <el-table-column fixed width="150" prop="name" label="姓名"/>
                <el-table-column prop="sex" label="性别"/>
            </el-table>
        </el-row>

        <el-row>
            <h1>单行显示</h1>
            <el-table height="200" :data="table1.data" stripe border
                      @selection-change="onSelectionChange">
                <el-table-column type="selection" width="50"/>
                <el-table-column fixed width="150" prop="name" label="姓名"/>
                <el-table-column prop="sex" label="性别"/>
                <!-- 在一列上加上 show-overflow-tooltip 属性 可以让该列呈现单行显示 超出部分显示为省略号 -->
                <el-table-column show-overflow-tooltip prop="desc" label="简介"/>
            </el-table>
        </el-row>

        <el-row>
            <h1>自定义模板</h1>
            <el-table height="200" :data="table1.data" stripe border
                      @selection-change="onSelectionChange">
                <el-table-column type="selection" width="50"/>
                <el-table-column fixed width="150" prop="name" label="姓名"/>
                <el-table-column prop="sex" label="性别">
                    <!-- 自定义模板使用作用域插槽 -->
                    <template slot-scope="scope">
                        {{scope.row.sex|sexFormatter}}
                    </template>
                </el-table-column>
                <!-- 在一列上加上 show-overflow-tooltip 属性 可以让该列呈现单行显示 超出部分显示为省略号 -->
                <el-table-column width="800" show-overflow-tooltip prop="desc" label="简介"/>
                <el-table-column fixed="right" width="160" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" plain>编辑</el-button>
                        <el-button size="mini" type="danger" @click="remove(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
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

    export default {
        name: 'SimpleTable',
        data() {
            return {
                table1: {
                    selection: [],
                    data: buildData(20)
                }
            }
        },
        methods: {
            // 当多选内容发生变化时触发该函数
            // selection 用户当前所选行的数组
            onSelectionChange(selection) {
                console.log(selection)
                // 保存所选数据 当要进行批量删除时就可以从 table1.selection 中获取要删除的内容
                this.table1.selection = selection
            },
            sexFormatter(scope) {
                console.log(scope)
            },
            remove(id) {
                console.log(id)
            }
        }
    }
</script>

<style scoped>

</style>