<template>
    <div class="home">
        <!-- 工具栏 -->
        <el-row>
            <el-card>
                <!-- 查询条件表单 -->
                <el-form :model="form" inline>
                    <el-form-item>
                        <el-button type="primary" @click="openAddDialog">添加</el-button>
                        <el-button type="danger" @click="remove">批量删除</el-button>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name" clearable placeholder="请输入姓名关键字"/>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="form.sex" clearable placeholder="筛选性别">
                            <el-option label="请选择" value="" disabled/>
                            <el-option label="男" value="male"/>
                            <el-option label="女" value="female"/>
                            <el-option label="其他" value="other"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" @click="query">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-row>
        <!-- 表格 -->
        <el-row style="flex-grow: 1; overflow-y: auto">
            <el-table v-loading="loading" :data="tableData" stripe @selection-change="onSelectionChange">
                <el-table-column type="selection"/>
                <el-table-column show-overflow-tooltip label="id" prop="_id"/>
                <el-table-column label="姓名" prop="name"/>
                <el-table-column label="性别" prop="sex">
                    <template slot-scope="scope">
                        {{scope.row.sex|sexFormatter}}
                    </template>
                </el-table-column>
                <el-table-column label="年龄" prop="age"/>
                <el-table-column show-overflow-tooltip label="创建时间" prop="createTime">
                    <template slot-scope="scope">
                        {{scope.row.createTime|dateFormatter}}
                    </template>
                </el-table-column>
                <el-table-column show-overflow-tooltip label="修改时间" prop="updateTime">
                    <template slot-scope="scope">
                        {{scope.row.updateTime|dateFormatter}}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="openEditDialog(scope.row._id)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="removeOne(scope.row._id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <!-- 分页 -->
        <el-row>
            <el-pagination
                    :current-page="pager.page"
                    :page-size="pager.size"
                    :total="total"
                    :page-sizes="pager.sizeOptions"
                    layout="sizes, prev, pager, next, jumper, ->, total"
                    @current-change="onPageChange"
                    @size-change="onSizeChange"
            />
        </el-row>


        <!-- 添加和编辑的对话框 -->
        <el-dialog :visible="dialog.visible" :title="dialogTitle" :before-close="closeDialog">
            <el-form ref="form" :model="dialog.form" :rules="dialog.rules">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="dialog.form.name"/>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio v-model="dialog.form.sex" label="male">男</el-radio>
                    <el-radio v-model="dialog.form.sex" label="female">女</el-radio>
                    <el-radio v-model="dialog.form.sex" label="other">其他</el-radio>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input-number v-model.number="dialog.form.age"/>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="closeDialog">取消</el-button>
                <el-button :loading="dialog.loading" type="primary" @click="submit">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'
    import studentApi from '@/api/student.js'
    // import {mapState, mapActions} from 'vuex'

    // 创建命名空间辅助工具
    const {mapState, mapActions} = createNamespacedHelpers('student')

    // 声明对话框标题的文本
    const dialogText = ['添加', '编辑']

    export default {
        name: 'Home',
        data() {
            return {
                loading: false, // 表格的加载提示
                selection: [],
                pager: {
                    page: 1,
                    size: 5,
                    sizeOptions: [5, 10, 20, 50]
                },
                form: {
                    name: '',
                    sex: ''
                },
                dialog: {
                    loading: false,
                    visible: false,
                    id: undefined,
                    form: {
                        name: '',
                        sex: 'other',
                        age: 0
                    },
                    rules: {
                        name: [
                            {
                                required: true,
                                message: '请输入姓名',
                                trigger: 'blur'
                            }, {
                                min: 2,
                                max: 10,
                                message: '请输入2~10个字的姓名',
                                trigger: 'blur'
                            }
                        ],
                        age: [
                            {
                                required: true,
                                message: '请输入年龄',
                                trigger: 'blur'
                            }, {
                                validator: (rule, value, callback) => {
                                    if (value >= 0 && value <= 100) {
                                        callback()
                                    } else {
                                        callback(new Error('请输入0~100的数字'))
                                    }
                                },
                                trigger: 'blur'
                            }
                        ]
                    }
                }
            }
        },
        created() {
            this.query()
        },
        methods: {
            ...mapActions([
                'a_query'
            ]),
            // 查询数据
            query() {
                this.loading = true
                // 构造参数
                let param = {page: this.pager.page, size: this.pager.size, ...this.form}
                this.a_query(param).finally(() => {
                    this.loading = false
                })
            },
            onPageChange(page) {
                this.pager.page = page
                this.query()
            },
            onSizeChange(size) {
                this.pager.size = size
                this.query()
            },
            openAddDialog() {
                this.dialog.visible = true
            },
            openEditDialog(id) {
                this.loading = true
                studentApi.getOne(id).then(result => {
                    if (result.data) {
                        this.dialog.id = id
                        for (const formKey in this.dialog.form) {
                            this.dialog.form[formKey] = result.data[formKey]
                        }
                        this.dialog.visible = true
                    }
                }).finally(() => {
                    this.loading = false
                })
            },
            closeDialog() {
                this.dialog.visible = false
                this.dialog.id = undefined
                this.$refs.form.resetFields()
            },
            submit() {
                this.$refs.form.validate(valid => {
                    if (!valid) return
                    this.dialog.loading = true
                    let promise
                    if (this.dialog.id) {
                        promise = this.edit()
                    } else {
                        // 添加操作
                        promise = this.add()
                    }
                    promise.then(result => {
                        if (result.msg === 'ok') {
                            this.$message.success('操作成功')
                            this.query()
                        } else {
                            this.$message.error('操作失败')
                        }
                    }).finally(() => {
                        this.dialog.loading = false
                        this.closeDialog()
                    })
                })
            },
            add() {
                return new Promise(resolve => {
                    let {name, sex, age} = this.dialog.form
                    studentApi.add(name, sex, age).then(result => {
                        resolve(result)
                    })
                })
            },
            edit() {
                return new Promise(resolve => {
                    let {name, sex, age} = this.dialog.form
                    studentApi.edit(this.dialog.id, name, sex, age).then(result => {
                        resolve(result)
                    })
                })
            },
            removeOne(id) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    studentApi.remove([id]).then(result => {
                        if (result.msg === 'ok') {
                            this.$message.success('操作成功')
                            this.query()
                        } else {
                            this.$message.error('操作失败')
                        }
                    })
                }).catch(() => {
                })
            },
            remove() {
                this.$confirm('此操作将永久删除被选中的数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    const ids = this.selection.map(row => {
                        return row._id
                    })
                    studentApi.remove(ids).then(result => {
                        if (result.msg === 'ok') {
                            this.$message.success('操作成功')
                            this.query()
                        } else {
                            this.$message.error('操作失败')
                        }
                    })
                }).catch(() => {
                })
            },
            onSelectionChange(selection) {
                this.selection = selection
            }
        },
        computed: {
            // 将 store 中的 state 映射到计算属性中
            ...mapState([
                'tableData',
                'total'
            ]),
            dialogTitle() {
                return this.dialog.id ? dialogText[1] : dialogText[0]
            }
        }
    }
</script>

<style scoped>
    .home {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
