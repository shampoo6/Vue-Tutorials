export default {
    strict: true,
    namespaced: true,
    state: () => {
        return {
            account: '',
            pwd: '',
            nickname: ''
        }
    },
    mutations: {
        m_account(state, payload) {
            state.account = payload
        },
        m_pwd(state, payload) {
            state.pwd = payload
        },
        m_nickname(state, payload) {
            state.nickname = payload
        },
    },
    actions: {
        a_account({commit}, payload) {
            commit('m_account', payload)
        },
        a_pwd({commit}, payload) {
            commit('m_pwd', payload)
        },
        a_nickname({commit}, payload) {
            commit('m_nickname', payload)
        },
    }
}