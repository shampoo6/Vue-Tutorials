<template>
    <div>
        <el-container class="my-container"> <!-- el-container 用于容纳其他的布局容器 -->
            <el-header class="my-container">
                <!-- header中一般是网站title，导航，用户信息，搜索栏 -->
                header
            </el-header>
            <el-container class="my-container">
                <el-aside class="my-container">aside</el-aside>
                <el-main class="my-container">
                    <!--页面显示的主要内容在这里-->
                    main
                </el-main>
            </el-container>
            <el-footer class="my-container">
                <!--footer中一般是copyright版权信息、合作伙伴、客服连接、技术支持、文档-->
                &copy;
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'LayoutContainer'
    }
</script>

<style scoped>

</style>