<template>
    <div class="container">
        <el-container class="body border">
            <el-aside class="border" width="200px">Aside</el-aside>
            <el-container>
                <el-header class="border">Header</el-header>
                <el-main class="border">Main</el-main>
                <el-footer class="border">Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>

<style scoped>
    .body {
        height: 100%;
    }
</style>