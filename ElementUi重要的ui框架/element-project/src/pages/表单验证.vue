<template>
    <div>
        <el-form ref="myForm" :model="form" :rules="rules" label-width="80px" style="width: 280px">
            <el-form-item prop="mail" label="邮箱">
                <el-input v-model="form.mail"></el-input>
            </el-form-item>
            <el-form-item prop="name" label="姓名">
                <el-input v-model="form.name" clearable placeholder="请输入姓名" :maxlength="5"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别">
                <el-radio v-model="form.sex" label="male">
                    <span style="color: blue">男</span>
                </el-radio>
                <el-radio v-model="form.sex" label="female">女</el-radio>
            </el-form-item>
            <el-form-item prop="hobby" label="爱好">
                <el-checkbox v-model="form.hobby" label="sing">唱歌</el-checkbox>
                <el-checkbox v-model="form.hobby" label="dance">跳舞</el-checkbox>
                <el-checkbox v-model="form.hobby" label="paint">绘画</el-checkbox>
            </el-form-item>
            <el-form-item prop="city" label="所在城市">
                <el-select v-model="form.city" clearable>
                    <el-option v-for="city in cities"
                               :label="city.label"
                               :value="city.value"
                               :key="city.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="desc" label="简介">
                <el-input type="textarea" rows="3" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit" :loading="loading">提交</el-button>
                <!--<el-button type="danger">删除</el-button>
                <el-button>取消</el-button>
                <el-button>大</el-button>
                <el-button size="medium">中</el-button>
                <el-button size="small">小</el-button>
                <el-button size="mini">微小</el-button>-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    // 表单验证: 验证表单中，用户输入数据是否合法
    // 1. 在el-form中绑定model属性
    // 2. 在el-form-item中绑定prop属性
    // 3. 在el-form中绑定验证规则

    // 自定义验证器
    // 1. 定义验证函数
    // 2. 在验证规则中添加自定义函数验证器

    export default {
        name: 'validateForm',
        data() {
            // 定义自定义验证函数
            // 验证函数接受三个参数：
            // rule: 描述验证器所验证的表单项的对象
            // value: 表单项的值
            // callback: 验证结束后的回调函数，用于告诉elementui是否验证通过
            const checkMail = (rule, value, callback) => {
                // 非空判断
                if (!value || value.trim() === '') {
                    // 如果为空或空字符串，返回错误提示
                    callback(new Error('请输入邮箱'))
                    return
                }

                // 邮箱格式判断
                // 声明一个正则表达式，用于匹配字符串是否是一个有效邮箱
                let regex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if (regex.test(value)) {
                    // 如果匹配成功，说明表单项的值是一个邮箱格式
                    // 调用callback代表验证通过
                    callback()
                } else {
                    // 不是邮箱格式，就返回错误提示
                    callback(new Error('请输入有效邮箱'))
                }
            }

            return {
                // 是否在加载中
                loading: false,
                // 声明cities 用于渲染select的选项
                cities: [
                    {label: '大重庆', value: 'CQ'},
                    {label: '北京', value: 'BJ'},
                    {label: '深圳', value: 'SZ'}
                ],
                rules: {
                    // 此处声明验证规则
                    // 验证规则是一个json对象
                    // key: 需要验证的表单项名称，对应el-form-item中的prop属性
                    // value: 规则数组，描述多项验证规则
                    name: [
                        // 每一项规则是一个json对象
                        {
                            // 非空验证
                            required: true, // required为true说明此表单项是必填项
                            message: '请输入姓名', // 错误提示
                            trigger: 'blur' // 触发验证的触发器规则
                        },
                        {
                            // 长度验证
                            min: 2, // 规定字符串的最小长度
                            max: 5, // 规定字符串的最大长度
                            message: '请输入2~5个字', // 错误提示
                            trigger: 'blur' // 触发验证的触发器规则
                        }
                    ],
                    mail: [
                        {
                            validator: checkMail, // 配置验证器
                            trigger: 'blur'
                        }
                    ]
                },
                form: {
                    mail: '',
                    name: '',
                    sex: 'female',
                    hobby: ['dance', 'paint'],
                    city: 'SZ',
                    desc: '大\n重\n庆'
                }
            }
        },
        methods: {
            submit() {
                console.log(this.form)

                // 表单验证
                // 手动触发表单验证的方法如下：
                // 1. 通过this.$refs获取el-form表单对象
                // 2. 调用表单对象的validate方法，进行表单验证
                // 3. validate方法接受一个回调函数，接受一个valid变量；该变量为true说明验证通过，反之验证失败
                this.$refs.myForm.validate(valid => {
                    if (valid) {
                        // 关闭提交按钮
                        this.loading = true
                        // 发起网络请求
                        this.requestUserInfo().then(() => {
                            console.log('接受到服务器的响应')
                            // 接受服务器响应以后
                            // 重新开放按钮
                            this.loading = false
                        })
                    }
                })
            },
            // 此函数用于模拟网络请求
            requestUserInfo() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve()
                    }, 2000)
                })
            }
        }
    }
</script>

<style scoped>

</style>