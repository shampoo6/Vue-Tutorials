import Vue from "vue";

export default {
    // page() {
    //     return Vue.prototype.$axios.get('/table/page')
    // }
    page() {
        return Vue.prototype.$axios.post('/table/page')
    }
}
