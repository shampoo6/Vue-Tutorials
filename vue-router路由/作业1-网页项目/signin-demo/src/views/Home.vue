<template>
    <div class="container">
        <div class="sidebar">
            <div class="nav-btn" @click="toPage('/page1')">to Page1</div>
            <div class="nav-btn" @click="toPage('/page2')">to Page2</div>
        </div>
        <div class="right">
            <div class="nav">
                <div v-if="isSignIn">张三</div>
                <router-link v-else to="/signIn">登录</router-link>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            toPage(path) {
                this.$router.push(path)
            }
        },
        computed: {
            isSignIn() {
                return document.cookie.includes('signInToken')
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        height: 100%;
    }

    .sidebar {
        width: 200px;
        border-right: 3px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .right {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .nav {
        height: 80px;
        border-bottom: 3px solid black;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .nav-btn {
        height: 50px;
        border-bottom: 3px solid black;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>
