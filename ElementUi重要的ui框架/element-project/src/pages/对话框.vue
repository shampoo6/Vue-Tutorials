<template>
    <div>
        <el-button type="primary" @click="openDialog">打开对话框</el-button>

        <!-- 定义对话框 -->
        <!-- 绑定visible属性，用于显示和隐藏对话框，值为true就是显示，反之则为隐藏 -->
        <!-- 绑定before-close属性，用于处理对话框关闭前事件 -->
        <!-- 绑定title属性，设置对话框标题 -->
        <!-- 设置width属性，可以调节宽度 -->
        <el-dialog :visible="visible" :before-close="closeDialog" :title="title" width="360px">
            <el-form ref="myForm" :model="form" :rules="rules" label-width="80px" style="width: 300px">
                <el-form-item prop="name" label="姓名">
                    <el-input v-model="form.name" clearable :maxlength="5"></el-input>
                </el-form-item>
                <el-form-item prop="age" label="年龄">
                    <el-input-number v-model.number="form.age"></el-input-number>
                </el-form-item>
                <!--<el-form-item>
                    <el-button type="primary">提交</el-button>
                </el-form-item>-->
            </el-form>
            <!-- 声明dialog的footer具名插槽 -->
            <template v-slot:footer>
                <el-button type="primary" @click="submit" :loading="loading">提交</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'MyDialog',
        data() {
            const checkAge = (rule, value, callback) => {
                if (typeof value === 'undefined' || value < 0) {
                    callback(new Error('年龄不能小于0'))
                } else if (value > 200) {
                    callback(new Error('年龄不能超过200'))
                } else {
                    callback()
                }
            }

            return {
                visible: false,
                title: '编辑',
                form: {
                    name: '',
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
                            max: 5,
                            message: '请输入2~5个字的姓名',
                            trigger: 'blur'
                        }
                    ],
                    age: [
                        {
                            validator: checkAge,
                            trigger: 'blur'
                        }
                    ]
                },
                loading: false
            }
        },
        methods: {
            openDialog() {
                // 打开对话框，只需要设置其visible属性为true即可
                this.visible = true
            },
            closeDialog() {
                // 关闭对话框
                this.visible = false
                // 重置表单数据
                this.$refs.myForm.resetFields()
            },
            submit() {
                this.$refs.myForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        this.request().then(() => {
                            this.loading = false
                            this.$message.success('提交成功')
                            this.visible = false // 关闭对话框
                        })
                    }
                })
            },
            request() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve()
                    }, 3000)
                })
            }
        }
    }
</script>

<style scoped>

</style>