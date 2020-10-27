<template>
    <div>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="danger" @click="remove">删除</el-button>
    </div>
</template>

<script>
    // 消息：用于提示操作
    // 消息盒：用于更明显的提示操作

    // 引入消息组件
    // import {Message} from 'element-ui'
    // import {MessageBox} from 'element-ui'

    export default {
        name: 'MessageAndMessageBox',
        methods: {
            submit() {
                // 消息的使用有两种方式

                // 组件调用
                // Message.success('success')
                // Message.info('info')
                // Message.error('error')
                // Message.warning('warning')

                // 全局调用
                this.$message.success('success')
                // this.$message.info('info')
                // this.$message.error('error')
                // this.$message.warning('warning')
            },
            remove() {
                // 使用messagebox进行删除提醒
                // messagebox的使用有两种方式

                // 组件调用
                // MessageBox.alert // 提示
                // MessageBox.confirm // 确认
                // MessageBox.prompt // 输入

                // MessageBox.confirm('确定要删除么？', '删除', {
                //     type: 'warning', // type的待选项有：success/info/warning/error
                //     cancelButtonText: '取消', // 取消按钮显示的文本
                //     confirmButtonText: '删除', // 确定按钮显示的文本
                //     callback: (op) => {
                //         // 这是按钮操作后的回调函数
                //         // 接收一个参数operation，用于指示触发callback的操作
                //         console.log(op)
                //         if (op === 'cancel') {
                //             this.$message.info('删除操作被取消了')
                //         } else if (op === 'confirm') {
                //             this.$message.success('删除成功')
                //         }
                //     }
                // })

                // 全局调用
                this.$confirm('确定要删除么？', '删除', {
                    type: 'warning', // type的待选项有：success/info/warning/error
                    cancelButtonText: '取消', // 取消按钮显示的文本
                    confirmButtonText: '删除', // 确定按钮显示的文本
                    callback: (op) => {
                        // 这是按钮操作后的回调函数
                        // 接收一个参数operation，用于指示触发callback的操作
                        console.log(op)
                        if (op === 'cancel') {
                            this.$message.info('删除操作被取消了')
                        } else if (op === 'confirm') {
                            this.$message.success('删除成功')
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>