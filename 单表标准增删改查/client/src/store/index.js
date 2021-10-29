import Vue from 'vue'
import Vuex from 'vuex'
import student from './module/student.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state() {
        return {}
    },
    mutations: {},
    actions: {},
    modules: {
        student
    }
})
