<template>
    <div>
        <h1>登录</h1>
        <form>
            <div><label>账号：<input name="account" v-model="account"/></label></div>
            <div><label>密码：<input name="pwd" type="password" v-model="pwd"/></label></div>
            <div><label>昵称：<input name="pwd" v-model="nickname"/></label></div>
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
        },
        computed: {
            account: {
                get() {
                    return this.$store.state.user.account
                },
                set(value) {
                    this.$store.dispatch('user/a_account', value)
                }
            },
            pwd: {
                get() {
                    return this.$store.state.user.pwd
                },
                set(value) {
                    this.$store.dispatch('user/a_pwd', value)
                }
            },
            nickname: {
                get() {
                    return this.$store.state.user.nickname
                },
                set(value) {
                    this.$store.dispatch('user/a_nickname', value)
                }
            },
        }
    }
</script>

<style scoped>

</style>