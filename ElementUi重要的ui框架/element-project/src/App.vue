<template>
    <div id="app">
        <!--        <layout-container></layout-container>-->
        <!--        <layout></layout>-->
        <!--        <my-form></my-form>-->
        <!--        <validate-form></validate-form>-->
<!--        <message-and-message-box></message-and-message-box>-->
<!--        <my-table></my-table>-->
        <my-dialog></my-dialog>
    </div>
</template>

<script>
    // import LayoutContainer from './pages/布局容器.vue'
    // import Layout from './pages/布局.vue'
    // import MyForm from './pages/表单.vue'
    // import ValidateForm from './pages/表单验证.vue'
    // import MessageAndMessageBox from './pages/消息与消息盒.vue'
    // import MyTable from './pages/表格和分页.vue'
    import MyDialog from './pages/对话框.vue'

    export default {
        name: 'App',
        components: {
            // LayoutContainer,
            // Layout,
            // MyForm,
            // ValidateForm,
            // MessageAndMessageBox,
            // MyTable,
            MyDialog
        }
    }
</script>

<style lang="less">
    .my-container {
        border: 1px solid black;
    }
</style>
