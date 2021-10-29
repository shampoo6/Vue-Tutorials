// 由于在不使用 namespaced 的模块中 所有的状态（state）和函数（mutations 和 actions）都是全局注册的
// 所以在模块中的状态和函数不能和全局注册的同名

export default {
    // 命名空间
    // 作用：让模块中的状态和函数不注册到全局，而是注册到局部，
    // 这样的化不同的模块就可以给状态和函数取相同的名称
    namespaced: true,
    strict: true,
    // state 在模块中是个函数
    state: () => {
        return {
            userCount: 5,
            count: 100
        }
    },
    mutations: {
        m_userCount(state, payload) {
            state.userCount = payload
        },
        // 有了命名空间就可以声明和 index 中名称相同的函数
        m_increase(state, payload) {
            if (!payload) payload = 1
            state.count += payload
        },
    },
    actions: {
        a_userCount({commit}, payload) {
            commit('m_userCount', payload)
        },
        a_increase(store, payload) {
            store.commit('m_increase', payload)
        },
    }
}