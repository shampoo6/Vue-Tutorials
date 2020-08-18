let welcome = {
    template:
        `<div>
        <p>
        <router-link to="/about">转到About</router-link>
        </p>
        欢迎来到我的首页
        <p>
        <button @click="toAbout">通过代码跳转路由</button>
        </p>
        </div>`,
    methods: {
        toAbout() {
            this.$router.push('/about')
        }
    }
}
