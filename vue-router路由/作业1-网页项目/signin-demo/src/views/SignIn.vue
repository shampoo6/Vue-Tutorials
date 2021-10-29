<template>
    <div>
        <h1>登录</h1>
        <form>
            <div><label>账号：<input name="account"/></label></div>
            <div><label>密码：<input name="pwd" type="password"/></label></div>
            <div>
                <button @click.prevent.stop="signIn" type="submit">登录</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SignIn',
        methods: {
            signIn() {
                // 添加cookie模拟登录
                document.cookie = 'signInToken=sdfgasefdgklhwrogi'
                // 页面跳转到首页
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>