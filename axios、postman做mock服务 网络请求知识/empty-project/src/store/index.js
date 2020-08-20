import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

// vuex基础使用方法

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true, // 启用严格模式，这样的话所有数据变更必须通过mutations方法，否则会报错
    state: {
        tableData: {
            data: [
                {
                    id: '1',
                    name: '书1',
                    author: '作者1',
                    type: '小说',
                    description: '这是本小说',
                    price: 50,
                    publishTime: Date.now()
                }, {
                    id: '1',
                    name: '书1',
                    author: '作者1',
                    type: '小说',
                    description: '这是本小说',
                    price: 110,
                    publishTime: Date.now()
                }, {
                    id: '1',
                    name: '书1',
                    author: '作者1',
                    type: '小说',
                    description: '这是本小说',
                    price: 230,
                    publishTime: Date.now()
                }, {
                    id: '1',
                    name: '书1',
                    author: '作者1',
                    type: '小说',
                    description: '这是本小说',
                    price: 556,
                    publishTime: Date.now()
                },
            ],
            total: 100
        },
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
        },
        m_tableData(state, payload) {
            state.tableData = payload
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
        },
        a_tablePage({commit}) {
            return new Promise((resolve) => {
                api.table.page().then(result => {
                    let data = {
                        data: result.data,
                        total: result.total
                    }
                    commit('m_tableData', data)
                    resolve(result.data)
                })
            })
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
