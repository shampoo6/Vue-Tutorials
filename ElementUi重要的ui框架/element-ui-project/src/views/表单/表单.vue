<template>
    <div>
        <el-card>
            <!-- 表单一定要绑定 model，model 是表单对应的数据模型
                label-width 同一设置表单项 label 的宽度
                inline 行内表单
                label-position label 的位置属性 可以设置 top left right
                size 统一修改所有表单元素的尺寸
             -->
            <el-form ref="form" :model="formData" label-width="80px" label-position="top" size="mini">
                <el-form-item prop="name" label="姓名">
                    <el-input v-model="formData.name"/>
                </el-form-item>
                <el-form-item prop="age" label="年龄">
                    <el-input-number v-model.number="formData.age"/>
                </el-form-item>
                <el-form-item prop="hobbies" label="爱好">
                    <el-checkbox-group v-model="formData.hobbies">
                        <el-checkbox label="dance">跳舞</el-checkbox>
                        <el-checkbox label="sing">唱歌</el-checkbox>
                        <el-checkbox label="paint">绘画</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="" style="display: flex; justify-content: flex-end;">
                    <el-button type="primary">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: '表单',
        data() {
            return {
                formData: {
                    name: '张三',
                    age: 16,
                    hobbies: ['dance']
                }
            }
        },
        methods: {
            resetForm() {
                this.$refs.form.resetFields() // 重置表单
            }
        }
    }
</script>

<style scoped>

</style>
