<template>
    <div>
        <!-- 使用container做布局容器 -->
        <el-container>
            <el-header>
                <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                    <el-menu-item index="/layout/page1">页面1</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="/layout/page3">页面3</el-menu-item>
                    <el-menu-item index="/layout/table">表格</el-menu-item>
                    <el-menu-item index="/table" disabled>表格</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        mounted() {
            // 重置当前激活的菜单
            this.activeIndex = this.$route.path
        },
        data() {
            return {
                activeIndex: '/page1'
            }
        },
        methods: {
            handleSelect(selected) {
                console.log(selected)
                // 当前页就是选择页 则结束操作
                // if (this.activeIndex === selected) return
                // this.activeIndex = selected
                // this.$router.push('/layout' + selected)
            }
        }
    }
</script>

<style scoped>

</style>
