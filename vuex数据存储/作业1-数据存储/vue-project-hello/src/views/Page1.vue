<template>
    <div>
        <table border>
            <thead>
            <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="stu in tableData" :key="stu.name">
                <td>{{stu.name}}</td>
                <td>{{stu.sex|sexFormatter}}</td>
                <td>{{stu.age}}</td>
                <td>
                    <button @click="toEdit(stu.name)">编辑</button>
                    <button @click="remove(stu.name)">删除</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
            <h1>添加</h1>
            <form>
                <div><label>姓名<input v-model="form.name" name="name"/></label></div>
                <div>性别
                    <label><input v-model="form.sex" name="sex" type="radio" value="male"/>男</label>
                    <label><input v-model="form.sex" name="sex" type="radio" value="female"/>女</label>
                    <label><input v-model="form.sex" name="sex" type="radio" value="other"/>其他</label>
                </div>
                <div><label>年龄<input v-model="form.age" name="age" type="number"/></label></div>
                <div>
                    <button @click.prevent.stop="add">提交</button>
                </div>
            </form>
        </div>
        <div>
            <h1>修改</h1>
            <form>
                <input type="hidden" v-model="editForm.id"/>
                <div><label>姓名<input v-model="editForm.name" name="name"/></label></div>
                <div>性别
                    <label><input v-model="editForm.sex" name="sex" type="radio" value="male"/>男</label>
                    <label><input v-model="editForm.sex" name="sex" type="radio" value="female"/>女</label>
                    <label><input v-model="editForm.sex" name="sex" type="radio" value="other"/>其他</label>
                </div>
                <div><label>年龄<input v-model="editForm.age" name="age" type="number"/></label></div>
                <div>
                    <button @click.prevent.stop="edit">提交</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page1',
        filters: {
            sexFormatter(value) {
                return value === 'male' ?
                    '男' :
                    value === 'female' ?
                        '女' : '其他'
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    sex: 'other',
                    age: 0
                },
                editForm: {
                    id: '',
                    name: '',
                    sex: 'other',
                    age: 0
                }
            }
        },
        computed: {
            tableData() {
                console.log(this.$store.state.student.data)
                return this.$store.state.student.data
            }
        },
        methods: {
            add() {
                // 克隆表单对象
                let stu = {...this.form}
                this.$store.dispatch('student/addStudent', stu)
            },
            toEdit(name) {
                // 保存id
                this.editForm.id = name

                // 获取学生姓名对应的学生数据并回显
                let stu = this.$store.getters['student/getOne'](name)
                for (const key in stu) {
                    // 拷贝属性到editForm
                    this.editForm[key] = stu[key]
                }
            },
            edit() {
                // 获取学生数据
                let stu = {...this.editForm}
                delete stu.id // 删除多余的id属性
                // 构造参数
                let param = {name: this.editForm.id, stu: stu}
                this.$store.dispatch('student/editStudent', param)
            },
            remove(name) {
                let result = confirm(`确定删除姓名为 ${name} 的学生么？`)
                if (result) {
                    this.$store.dispatch('student/remove', name)
                }
            }
        }
    }
</script>

<style scoped>

</style>