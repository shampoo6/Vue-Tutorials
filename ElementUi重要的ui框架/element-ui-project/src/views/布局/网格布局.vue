<template>
    <div>
        <el-row>
            <el-col class="border" :span="12">1</el-col>
        </el-row>
        <!-- 通过 span 设置大小 -->
        <!-- span = 24 为一整行的宽度 -->
        <el-row>
            <el-col class="border" :span="6">1</el-col>
            <el-col class="border" :span="12">2</el-col>
            <el-col class="border" :span="6">3</el-col>
        </el-row>
        <!-- gutter 单元格内容间距 -->
        <el-row :gutter="15">
            <el-col class="border" :span="6">1</el-col>
            <el-col class="border" :span="12">2</el-col>
            <el-col class="border" :span="6">3</el-col>
        </el-row>
        <!-- 列偏移 -->
        <el-row :gutter="20">
            <el-col class="border" :offset="6" :span="6">1</el-col>
            <el-col class="border" :offset="6" :span="6">2</el-col>
        </el-row>
        <!-- flex 对齐 -->
        <el-row :gutter="20" type="flex" justify="center">
            <el-col class="border" :span="6">1</el-col>
            <el-col class="border" :span="6">2</el-col>
            <el-col class="border" :span="6">3</el-col>
        </el-row>
        <!-- 响应式 -->
        <el-row>
            <el-col class="border" :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="hidden-xs-only">1</div></el-col>
            <el-col class="border" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</el-col>
            <el-col class="border" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</el-col>
            <el-col class="border" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</el-col>
        </el-row>

    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css';

    export default {
        name: 'Grid'
    }
</script>

<style scoped>

</style>