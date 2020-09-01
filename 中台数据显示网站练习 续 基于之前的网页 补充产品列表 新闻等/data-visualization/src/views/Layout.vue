<template>
    <div>
        <el-container>
            <el-header>汽车营地数据中台</el-header>
            <el-container>
                <el-aside ref="aside" width="200px">
                    <el-menu
                            :router="true"
                            default-active="/dashboard"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="/dashboard">
                            <template slot="title">
                                <i class="el-icon-odometer"/>
                                <span>冲浪板</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="/news">
                            <i class="el-icon-video-camera-solid"/>
                            <span slot="title">新闻</span>
                        </el-menu-item>
                        <el-menu-item index="/cars">
                            <i class="el-icon-truck"/>
                            <span slot="title">汽车列表</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main ref="main">
                    <router-view/>
                </el-main>
            </el-container>
            <el-footer>中台系统&copy;shampoo6 company 2010~2020</el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        created() {
            window.onresize = this.resizeContainer
        },
        mounted() {
            this.resizeContainer()
        },
        methods: {
            resizeContainer() {
                document.body.style.height = window.innerHeight + 'px'
                let containerHeight = document.body.clientHeight - (60 * 2)
                this.$refs.aside.$el.style.height = containerHeight + 'px'
                this.$refs.main.$el.style.height = containerHeight + 'px'
            },
            handleOpen() {
                console.log('open')
            },
            handleClose() {
                console.log('close')
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: rgb(84, 92, 100);
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        /*line-height: 260px;*/
    }

    .el-container:nth-child(7) .el-aside {
        /*line-height: 320px;*/
    }
</style>
