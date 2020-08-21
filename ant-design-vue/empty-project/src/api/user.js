import Vue from 'vue'

export default {
    edit(userInfo) {
        return new Promise(resolve => {
            Vue.prototype.$axios.post('/ucenter/edit', userInfo).then(data => {
                resolve(data.data)
            })
        })
    }
}
