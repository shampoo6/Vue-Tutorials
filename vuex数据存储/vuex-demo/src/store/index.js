import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'

// 安装vuex
Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
    strict: true, // 启用严格模式，这样的话所有数据变更必须通过mutations方法，否则会报错
    // modules 添加模块
    modules: {
        user
    },
    // state 数据状态 用于存放多页面间共享的数据
    state: {
        count: 0,
        step: 1,
        name: '张三',
        sex: 'male',
        money: 100.574 // 人名币
    },
    // mutations 修改状态的函数 在严格模式下 只能通过mutation修改状态
    mutations: {
        // mutation 中的函数 用于修改state状态
        // state: 当前状态 可以在 mutation 中修改
        // payload: 调用mutation函数时 传递的参数
        m_increase(state, payload) {
            if (!payload) payload = 1
            state.count += payload
        },
        m_step(state, payload) {
            if (payload && typeof payload === 'number')
                state.step = payload
        },
        m_name(state, payload) {
            state.name = payload
        },
        m_sex(state, payload) {
            state.sex = payload
        },
        m_money(state, payload) {
            state.money = payload
        }
    },
    // actions 用于发出修改状态的指令
    actions: {
        // 参数：
        // store: 当前的store对象
        // payload: 调用 action 函数时 传递的参数
        a_increase(store, payload) {
            // 使用 store.commit 发出指令
            // 第一个参数：mutation 的名字
            // 第二个参数：传递给mutation的参数
            store.commit('m_increase', payload)

            // action 中可以发起网络请求 从网上获取数据
        },
        // 也可以使用解构赋值来声明函数
        // a_increase({commit}, payload) {
        //    commit('m_increase', payload)
        // }

        a_step(state, payload) {
            if (!payload || typeof payload !== 'number') payload = 1
            state.commit('m_step', payload)
        },
        a_name(state, payload) {
            state.commit('m_name', payload)
        },
        a_sex({commit}, payload) {
            commit('m_sex', payload)
        },
        a_money(state, payload) {
            state.commit('m_money', payload)
        }
    },
    // 读取器
    // getter 相当与组件上的computed运算方法，但是getter可以在多个页面共享
    getters: {
        // state: 相当于 store 里的 state
        dollar(state) {
            return (state.money * 0.15).toFixed(2)
        },
        // 声明一个接受参数的 getter
        getMoney: (state) => {
            // 在函数内可以返回一个接受参数的函数
            return (country) => {
                if (country === 'US')
                    return (state.money * 0.15).toFixed(2)
                else if (country === 'UK') {
                    return (state.money * 0.11).toFixed(2)
                } else {
                    return state.money
                }
            }
        }
    }
})

export default store