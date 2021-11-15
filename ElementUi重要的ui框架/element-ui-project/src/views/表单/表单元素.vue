<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <!-- model 代表的是表单的数据容器 -->
                <el-form ref="form" :model="form" label-width="80px">
                    <!-- 使用 el-form-item 声明一个表单项 -->
                    <!-- label 属性是表单项的标题
                        prop 双向绑定使用的属性名称
                        prop 用于指定哪些表单项需要进行表单验证 也决定了哪些表单项能被重置
                     -->
                    <el-form-item label="姓名" prop="name">
                        <!-- 输入框 -->
                        <!-- clearable 可清空输入框 -->
                        <el-input v-model="form.name"
                                  placeholder="请输入姓名"
                                  clearable
                                  maxlength="200"
                                  show-word-limit
                        />
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <!-- 输入框 -->
                        <el-input v-model.number="form.age" :min="0" :max="200" placeholder="请输入年龄"/>
                    </el-form-item>

                    <!-- 单选 -->
                    <el-form-item label="性别" prop="sex">
                        <!-- label 用于存储但选项值的属性 -->
                        <el-radio v-model="form.sex" label="male">男</el-radio>
                        <el-radio v-model="form.sex" label="female">女</el-radio>
                        <el-radio v-model="form.sex" label="other">其他</el-radio>
                    </el-form-item>
                    <!-- 多选 -->
                    <el-form-item label="爱好" prop="hobbies">
                        <el-checkbox :indeterminate="form.indeterminate" v-model="form.checkAll" @change="checkAllChange">全选
                        </el-checkbox>
                        <!-- label 用于存储但选项值的属性 -->
                        <!--<el-checkbox v-model="form.hobbies" label="sing">唱歌</el-checkbox>
                        <el-checkbox v-model="form.hobbies" label="dance">跳舞</el-checkbox>
                        <el-checkbox v-model="form.hobbies" label="paint">绘画</el-checkbox>-->

                        <!-- 使用分组 -->
                        <el-checkbox-group v-model="form.hobbies" @change="checkboxChange">
                            <el-checkbox v-for="hobby in checkboxOptions" :key="hobby.value" :label="hobby.value">
                                {{hobby.label}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="班级" prop="clazz">
                        <el-select v-model="form.clazz">
                            <el-option v-for="option in classOptions"
                                       :key="option.value"
                                       :label="option.label"
                                       :value="option.value"
                            />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="简介" prop="desc">
                        <el-input v-model="form.desc" type="textarea" :rows="4" placeholder="请输入简介"/>
                    </el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-button class="w-100" @click="reset">重置</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button class="w-100" type="primary" @click="submit">提交</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: 'FormElement',
        data() {
            return {
                form: {
                    indeterminate: false, // 是否显示为不确定按钮
                    checkAll: false, // 是否全选
                    name: '',
                    age: 0,
                    sex: 'other',
                    hobbies: [],
                    clazz: '2',
                    desc: ''
                },
                checkboxOptions: [ // 多选按钮的配置
                    {label: '唱歌', value: 'sing'},
                    {label: '跳舞', value: 'dance'},
                    {label: '绘画', value: 'paint'},
                ],
                classOptions: [ // 下拉选择项
                    {label: '1班', value: '1'},
                    {label: '2班', value: '2'},
                    {label: '3班', value: '3'},
                ]
            }
        },
        methods: {
            submit() {
                console.log(this.form)
            },
            // 重置表单
            reset() {
                // console.log(this.$refs.form)
                this.$refs.form.resetFields()
            },
            // 全选按钮发生变化事件
            checkAllChange(value) {
                console.log('check all')
                console.log(value)

                console.log(this.allSelections)
                this.form.hobbies = value ? this.allSelections : []
                this.form.indeterminate = false
            },
            // 选项发生变化事件
            checkboxChange(selection) {
                console.log('check change')
                console.log(selection)

                if (selection.length === this.allSelections.length) {
                    this.form.checkAll = true
                    this.form.indeterminate = false
                } else if (selection.length === 0) {
                    this.form.checkAll = false
                    this.form.indeterminate = false
                } else {
                    this.form.indeterminate = true
                }
            }
        },
        computed: {
            // 全选内容将返回一个数组
            allSelections() {
                let result = []
                for (let i = 0; i < this.checkboxOptions.length; i++) {
                    const option = this.checkboxOptions[i]
                    result.push(option.value)
                }
                return result
            }
        }
    }
</script>

<style scoped>
    .w-100 {
        width: 100%;
    }
</style>