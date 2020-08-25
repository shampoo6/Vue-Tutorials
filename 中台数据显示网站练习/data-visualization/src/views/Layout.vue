<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
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
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main ref="main">
                    <router-view/>
                </el-main>
            </el-container>
            <el-footer>Footer</el-footer>
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
