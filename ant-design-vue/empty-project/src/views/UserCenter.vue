<template>
    <div>
        <a-form-model ref="form" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item prop="nickName" label="昵称">
                <a-input :read-only="!form.edit" v-model="form.nickName" placeholder="请输入昵称"/>
            </a-form-model-item>
            <a-form-model-item label="性别">
                <a-radio-group v-model="form.sex">
                    <a-radio :disabled="!form.edit" value="female">
                        女
                    </a-radio>
                    <a-radio :disabled="!form.edit" value="male">
                        男
                    </a-radio>
                    <a-radio :disabled="!form.edit" value="other">
                        其他
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item prop="birth" label="生日">
                <a-date-picker
                        :disabled="!form.edit"
                        v-model="form.birth"
                        type="date"
                        placeholder="请选择生日"
                        style="width: 100%;"
                />
            </a-form-model-item>
            <a-form-model-item prop="department" label="部门">
                <a-select :disabled="!form.edit" v-model="form.department" placeholder="请选择部门">
                    <a-select-option value="IT">
                        IT部
                    </a-select-option>
                    <a-select-option value="HR">
                        人事部
                    </a-select-option>
                    <a-select-option value="MONEY">
                        财务部
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item prop="hobby" label="爱好">
                <a-checkbox-group v-model="form.hobby">
                    <a-checkbox :disabled="!form.edit" value="eat" name="hobby">
                        吃
                    </a-checkbox>
                    <a-checkbox :disabled="!form.edit" value="drink" name="hobby">
                        喝
                    </a-checkbox>
                    <a-checkbox :disabled="!form.edit" value="play" name="hobby">
                        玩
                    </a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>
            <a-form-model-item prop="desc" label="简介">
                <a-input :read-only="!form.edit" v-model="form.desc" type="textarea"/>
            </a-form-model-item>
            <a-form-model-item label="编辑">
                <a-switch v-model="form.edit"/>
            </a-form-model-item>
            <a-form-model-item v-if="form.edit" :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                    保存
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "UserCenter",
        data() {
            const checkDesc = (rule, value, callback) => {
                if (!value || value.trim() === '')
                    return callback(new Error('请输入简介'))
                if (value.length < 2 || value.length > 20) {
                    return callback(new Error('请输入长度为2~20的简介'))
                }
                callback()
            };

            return {
                labelCol: {span: 4},
                wrapperCol: {span: 14},
                form: {
                    nickName: this.$store.state.userInfo.nickName,
                    sex: this.$store.state.userInfo.sex,
                    // birth: this.$store.state.userInfo.birth,
                    birth: this.$store.state.userInfo.birth ? this.$store.state.userInfo.birth : moment(),
                    department: this.$store.state.userInfo.department,
                    hobby: this.$store.state.userInfo.hobby,
                    desc: this.$store.state.userInfo.desc,
                    edit: false,
                },
                // form: Object.assign({edit: false}, this.$store.state.userInfo),
                rules: {
                    nickName: [
                        {required: true, message: '请输入昵称', trigger: 'blur'},
                        {min: 2, max: 10, message: '请输入长度在2~10的昵称', trigger: 'blur'},
                    ],
                    birth: [{required: true, message: '请输入生日', trigger: 'change'}],
                    hobby: [
                        {
                            type: 'array',
                            required: true,
                            message: '请选择至少一个爱好',
                            trigger: 'change',
                        },
                    ],
                    desc: [
                        // {required: true, message: '请输入简介', trigger: 'change'},
                        // {min: 2, max: 20, message: '请输入长度在2~20的简介', trigger: 'blue'},
                        {validator: checkDesc, trigger: 'blur'}
                    ],
                },
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!', this.form);
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.$store.dispatch('a_editUserInfo', this.form).then(data => {
                            if (data.success) {
                                this.$message.success('编辑成功')
                            } else {
                                this.$message.error('编辑失败')
                            }
                            this.form.edit = false
                        })
                    }
                })
            },
        },
    }
</script>

<style scoped>

</style>
