<template>
    <div>
        <el-row>
            <!--加入inline，使表单显示成一行-->
            <!--<el-form :model="form" label-width="80px" inline>
                <el-form-item prop="name" label="姓名">
                    <el-input v-model="form.name" placeholder="请输入姓名" clearable/>
                </el-form-item>
                <el-form-item prop="age" label="年龄">
                    <el-input-number v-model.number="form.age"/>
                </el-form-item>
                <el-form-item prop="sex" label="性别">
                    <el-radio v-model="form.sex" label="男"/>
                    <el-radio v-model="form.sex" label="女"/>
                    <el-radio v-model="form.sex" label="其他"/>
                </el-form-item>
                <el-form-item prop="department" label="部门">
                    <el-select v-model="form.department">
                        <el-option v-for="(el, index) in department" :key="index" :value="el.value">{{el.label}}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="hobby" label="爱好">
                    <el-checkbox v-model="form.hobby" label="跳舞" value="dancing"/>
                    <el-checkbox v-model="form.hobby" label="绘画" value="painting"/>
                    <el-checkbox v-model="form.hobby" label="唱歌" value="sing"/>
                </el-form-item>
                <el-form-item prop="description" label="简介">
                    <el-input type="textarea" v-model="form.description" rows="4"/>
                </el-form-item>
            </el-form>-->

            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item prop="name" label="姓名">
                    <el-input v-model="form.name" placeholder="请输入姓名" clearable/>
                </el-form-item>
                <el-form-item prop="age" label="年龄">
                    <el-input-number v-model.number="form.age"/>
                </el-form-item>
                <el-form-item prop="sex" label="性别">
                    <el-radio v-model="form.sex" label="男"/>
                    <el-radio v-model="form.sex" label="女"/>
                    <el-radio v-model="form.sex" label="其他"/>
                </el-form-item>
                <el-form-item prop="department" label="部门">
                    <el-select v-model="form.department" clearable>
                        <el-option v-for="(el, index) in department" :key="index" :value="el.value">{{el.label}}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="hobby" label="爱好">
                    <el-checkbox v-model="form.hobby" label="跳舞" value="dancing"/>
                    <el-checkbox v-model="form.hobby" label="绘画" value="painting"/>
                    <el-checkbox v-model="form.hobby" label="唱歌" value="sing"/>
                </el-form-item>
                <el-form-item prop="description" label="简介">
                    <el-input type="textarea" v-model="form.description" rows="4"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-button @click="showMessage">显示消息</el-button>
            <el-button @click="showMessageBox">显示消息框</el-button>
        </el-row>
    </div>
</template>

<script>
    // 引入全局消息
    // import {Message} from 'element-ui'
    // 引入全局消息框
    import {MessageBox} from 'element-ui'

    export default {
        name: "Page3",
        data() {
            // 自定义验证器
            const checkAge = (rule, value, callback) => {
                console.log(rule)
                if (value < 0 || value > 200) {
                    callback(new Error('请输入0~200之间的年龄'))
                } else {
                    callback()
                }
            }

            return {
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    age: [
                        {validator: checkAge, trigger: 'blur'}
                    ],
                    department: [
                        {required: true, message: '请选择部门', trigger: 'blur'}
                    ],
                    hobby: [
                        {required: true, message: '请选择爱好', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入简介', trigger: 'blur'},
                        {min: 5, max: 10, message: '请输入5~10个字的简介', trigger: 'blur'}
                    ]
                },
                department: [{label: 'IT部', value: 'IT'}, {label: '人事部', value: 'HR'}, {label: '财务部', value: 'Money'}],
                form: {
                    name: '',
                    age: 0,
                    sex: '男',
                    department: '',
                    hobby: [],
                    description: ''
                }
            }
        },
        methods: {
            submit() {
                this.$refs.form.validate((valid) => {
                    console.log('valid result')
                    console.log(valid)
                })
            },
            showMessage() {
                // 调用全局消息
                // Message.info('这是info')
                // Message.error('这是error')
                // Message.warning('这是warning')
                // Message.success('这是success')

                // 调用组件内消息
                this.$message.success('这是success')
            },
            showMessageBox() {
                // 普通提示
                // 调用全局消息框
                MessageBox.alert('这是alert', '这是alert的Title2', {
                    // type: 'info',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    closeOnClickModal: true, // 点击模态也能关闭
                    center: true, // 居中
                    callback: action => {
                        this.$message.info(action)
                    }
                })

                // 确定提示
                this.$confirm('确定删除？', '删除确认', {
                    type: 'warning'
                }).then(() => {
                    this.$message.success('确定')
                }).catch(() => {
                    this.$message.info('取消')
                })

                // 提交数据
                this.$prompt('请输入姓名', '姓名输入', {
                    type: 'error'
                }).then(result => {
                    this.form.name = result.value
                    this.$message.success('确定')
                }).catch(() => {
                    this.$message.info('取消')
                })
            }
        }
    }
</script>

<style scoped>

</style>
