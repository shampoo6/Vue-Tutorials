<template>
    <div>
        <el-button @click="visible = true">打开对话框</el-button>
        <!--
            对话框
            visible 值为 true 就打开对话框 否则就隐藏对话框
            before-close 关闭窗口事件 该事件将在点击右上角叉或者点击遮罩的时候被触发
            title 标题
         -->
        <el-dialog :visible="visible"
                   :before-close="onBeforeClose"
                   :title="titleText"
        >
            <el-form ref="form" :model="form" label-width="80" inline>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"/>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input-number v-model.number="form.age"/>
                </el-form-item>
            </el-form>

            <!-- 使用footer插槽添加按钮 -->
            <span slot="footer">
                <el-button size="small" plain @click="onBeforeClose">取消</el-button>
                <el-button size="small" type="primary" @click="onBeforeClose">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Dialog',
        data() {
            return {
                visible: false,
                titleText: '添加',
                form: {
                    name: '',
                    age: 0
                }
            }
        },
        methods: {
            onBeforeClose() {
                console.log('before-close')
                // 隐藏对话框
                this.visible = false
                // 重置表单
                this.$refs.form.resetFields()
            }
        }
    }
</script>

<style scoped>

</style>
