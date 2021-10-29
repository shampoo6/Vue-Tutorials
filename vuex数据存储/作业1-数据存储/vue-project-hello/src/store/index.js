import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import student from './student.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    modules: {
        user,
        student
    }
})

export default store