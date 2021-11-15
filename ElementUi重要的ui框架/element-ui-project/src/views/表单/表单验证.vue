<template>
    <div>
        <el-row>
            <!-- 表单验证 -->
            <!-- 若要完成表单验证 el-form 上必须绑定model属性
                el-form-item 上必须要绑定prop属性
                el-form 上还需要绑定一个rules属性 用来规定表单的验证规则
             -->
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="邮箱" prop="mail">
                    <el-input v-model="form.mail"/>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"/>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio v-model="form.sex" label="male">男</el-radio>
                    <el-radio v-model="form.sex" label="female">女</el-radio>
                    <el-radio v-model="form.sex" label="other">其他</el-radio>
                </el-form-item>
                <el-form-item label="爱好" prop="hobbies">
                    <el-checkbox v-model="form.hobbies" label="sing">唱歌</el-checkbox>
                    <el-checkbox v-model="form.hobbies" label="dance">跳舞</el-checkbox>
                    <el-checkbox v-model="form.hobbies" label="paint">画画</el-checkbox>
                </el-form-item>
                <el-form-item label="城市" prop="city">
                    <el-select v-model="form.city">
                        <el-option v-for="city in cities"
                                   :key="city.value"
                                   :label="city.label"
                                   :value="city.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="简介" prop="desc">
                    <el-input type="textarea" :rows="3" v-model="form.desc"/>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <!-- loading 属性代表按钮的加载状态 -->
            <el-button :loading="loading" type="primary" @click="submit">提交</el-button>
        </el-row>
    </div>
</template>

<script>

    const regex = /^((?!共产党)[\s\S])*$/

    // 验证字符串是否包含共产党
    const GCDValidator = (rule, value, callback) => {
        if (regex.test(value)) {
            callback()
        } else {
            if (rule.field === 'name') {
                callback(new Error('姓名不能包含共产党'))
            } else if (rule.field === 'desc') {
                callback(new Error('简介不能包含共产党'))
            } else {
                callback(new Error('该字段不能包含共产党'))
            }
        }
    }

    export default {
        name: 'FormValidate',
        data() {
            return {
                // 按钮是否在加载中
                loading: false,
                cities: [
                    {label: '大重庆', value: 'CQ'},
                    {label: '北京', value: 'BJ'},
                    {label: '深圳', value: 'SZ'}
                ],
                form: {
                    mail: '',
                    name: '',
                    sex: 'female',
                    hobbies: ['dance', 'paint'],
                    city: 'SZ',
                    desc: '大\n重\n庆'
                },
                // 校验规则如下
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
                            trigger: 'blur' // trigger 是触发器 作用是 规定什么时候触发该验证规则
                        },
                        {
                            // 长度验证
                            min: 2, // 规定字符串的最小长度
                            max: 5, // 规定字符串的最大长度
                            message: '请输入2~5个字', // 错误提示
                            trigger: 'blur' // trigger 是触发器 作用是 规定什么时候触发该验证规则
                        },
                        // {
                        //     pattern: '^((?!共产党).)*$', // 正则验证
                        //     message: '名字中不能包含共产党', // 错误提示
                        //     trigger: 'blur' // trigger 是触发器 作用是 规定什么时候触发该验证规则
                        // }
                        {
                            validator: GCDValidator
                        }
                    ],
                    mail: [
                        {
                            // 非空验证
                            required: true, // required为true说明此表单项是必填项
                            message: '请输入邮箱', // 错误提示
                            trigger: 'blur' // trigger 是触发器 作用是 规定什么时候触发该验证规则
                        },
                        {
                            type: 'email', // 字段类型
                            message: '请输入正确的邮箱', // 错误提示
                            trigger: 'blur' // trigger 是触发器 作用是 规定什么时候触发该验证规则
                        },
                    ],
                    hobbies: [
                        {
                            // validator 是自定义的验证器 是个函数
                            // rule: 验证规则相关属性 多用于判断当前验证的是哪个字段
                            // value: 当前表单项中的输入值
                            // callback: 验证结果的回调函数
                            validator: (rule, value, callback) => {
                                console.log(rule)
                                console.log(value)
                                console.log(callback)

                                // 校验兴趣爱好不能大于2个
                                if (value.length > 2) {
                                    // 调用 callback 且参数为异常对象 代表验证失败
                                    callback(new Error('请选择两个以内的爱好'))
                                } else {
                                    // 调用 callback 且不传参数 代表验证通过
                                    callback()
                                }
                            }
                        }
                    ],
                    desc: [
                        {
                            validator: GCDValidator
                        }
                    ]
                }
            }
        },
        methods: {
            submit() {
                // 开始提交 应关闭按钮 不应该让用户能够反复点击提交按钮
                this.loading = true

                console.log(this.form)
                // 表单验证
                // 手动触发表单验证的方法如下：
                // 1. 通过this.$refs获取el-form表单对象
                // 2. 调用表单对象的validate方法，进行表单验证
                // 3. validate方法接受一个回调函数，接受一个valid变量；该变量为true说明验证通过，反之验证失败
                this.$refs.form.validate(valid => {
                    console.log(valid)

                    if (valid) {
                        // 当表单验证成功
                        // 大多情况需要在此发出网络请求
                        // 模拟网络请求的耗时
                        setTimeout(() => {
                            // 在收到服务器的响应后 应该解除按钮的加载状态
                            this.loading = false
                        }, 3000)

                        // promise.then().finally(() => {
                        //     this.loading = false
                        // })
                    }

                })
            }
        }
    }
</script>

<style scoped>

</style>