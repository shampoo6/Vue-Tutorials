let about = {
    template: `<div><button @click="goBack">返回</button>欢迎来到about页</div>`,
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
