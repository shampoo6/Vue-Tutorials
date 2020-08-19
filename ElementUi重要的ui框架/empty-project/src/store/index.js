import Vue from 'vue'
import Vuex from 'vuex'

// vuex基础使用方法

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true, // 启用严格模式，这样的话所有数据变更必须通过mutations方法，否则会报错
    state: {
        count: 0
    },
    mutations: {
        m_increase(state, payload) {
            if (!payload) payload = 1
            state.count += payload
        },
        m_decrease(state, payload) {
            if (!payload) payload = 1
            state.count -= payload
        }
    },
    actions: {
        // a_increase(store, payload) {
        a_increase({commit}, payload) {
            // console.log(store)
            // store.commit('m_increase', payload)
            commit('m_increase', payload)
        },
        a_decrease({commit}, payload) {
            commit('m_decrease', payload)
        }
    },
    getters: { // getter 相当与组件上的computed运算方法，但是getter可以在多个页面共享
        now() {
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            return `${year}-${month}-${day}`
        }
    }
})

export default store
