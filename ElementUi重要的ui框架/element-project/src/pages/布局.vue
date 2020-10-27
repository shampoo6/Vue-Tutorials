<template>
    <div>
        <!-- el-row + el-col 的布局 称为网格布局（grid） -->
        <el-row> <!-- el-row 代表行 -->
            <el-col :span="8" class="my-container"> <!-- el-col 代表列，使用span绑定宽度，24代表100%宽度 -->
                1-1
            </el-col>
            <el-col :span="16" class="my-container">
            1-2
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="my-container">2</el-col>
        </el-row>
        <el-row>
            <el-col :span="8" class="my-container"><i class="el-icon-video-camera-solid"/>3-1</el-col>
            <el-col :span="8" class="my-container">3-2</el-col>
            <el-col :span="8" class="my-container">3-3</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Layout'
    }
</script>

<style scoped>

</style>