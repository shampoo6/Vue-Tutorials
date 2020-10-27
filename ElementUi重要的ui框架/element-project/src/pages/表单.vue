<template>
    <div>
        <form>
            <div>姓名：<input/></div>
            <div>性别：
                <input type="radio" value="male"/>男
                <input type="radio" value="female"/>女
            </div>
            <div>爱好：
                <input type="checkbox" value="sing"/>唱歌
                <input type="checkbox" value="dance"/>跳舞
                <input type="checkbox" value="paint"/>绘画
            </div>
            <div>
                所在城市：
                <select>
                    <option>大重庆</option>
                    <option>北京</option>
                    <option>深圳</option>
                </select>
            </div>
            <div>
                简介：
                <textarea rows="4"></textarea>
            </div>
            <div>
                <button>提交</button>
            </div>
        </form>

        <!--使用element-ui来制作表单-->
        <!-- 创建el-form 表单标签，并绑定model属性 -->
        <!-- label-width 指定表单中的label宽度 -->
        <el-form :model="form" label-width="80px" style="width: 280px">
            <!-- 表单中每一个表单项，用el-form-item来包裹 -->
            <el-form-item prop="name" label="姓名">
                <!-- clearable 添加一个清空数据按钮 -->
                <!-- 通过设置maxlength属性来规定输入内容的最大长度 -->
                <el-input v-model="form.name" clearable placeholder="请输入姓名" :maxlength="5"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别">
                <!-- 单选使用el-radio标签 -->
                <!-- 使用v-model进行双向绑定，使用相同的v-model值，可以将按钮分为同一组 -->
                <!-- 显示在页面的内容写在标签体中 -->
                <!-- label属性用于给双向绑定的sex参数赋值 -->
                <el-radio v-model="form.sex" label="male">
                    <span style="color: blue">男</span>
                </el-radio>
                <el-radio v-model="form.sex" label="female">女</el-radio>
            </el-form-item>
            <el-form-item prop="hobby" label="爱好">
                <!-- checkbox多选框 -->
                <!-- 用法和el-radio相同 -->
                <el-checkbox v-model="form.hobby" label="sing">唱歌</el-checkbox>
                <el-checkbox v-model="form.hobby" label="dance">跳舞</el-checkbox>
                <el-checkbox v-model="form.hobby" label="paint">绘画</el-checkbox>
            </el-form-item>
            <el-form-item prop="city" label="所在城市">
                <!-- el-select 下拉框 -->
                <!-- v-model 绑定在el-select上 -->
                <!-- el-option 中，使用label绑定页面要显示的内容，使用value绑定要给v-model属性赋值的内容 -->
                <el-select v-model="form.city" clearable>
                    <el-option v-for="city in cities"
                               :label="city.label"
                               :value="city.value"
                               :key="city.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="desc" label="简介">
                <el-input type="textarea" rows="3" v-model="form.desc" :maxlength="500"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button type="danger">删除</el-button>
                <el-button>取消</el-button>
                <el-button>大</el-button>
                <el-button size="medium">中</el-button>
                <el-button size="small">小</el-button>
                <el-button size="mini">微小</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'MyForm',
        data() {
            return {
                // 声明cities 用于渲染select的选项
                cities: [
                    {label: '大重庆', value: 'CQ'},
                    {label: '北京', value: 'BJ'},
                    {label: '深圳', value: 'SZ'}
                ],
                form: {
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
            }
        }
    }
</script>

<style scoped>

</style>