import {createStore} from 'vuex';

export default createStore({
    state() {
        return {
            account: '',
            pwd: ''
        };
    },
    getters: {},
    mutations: {
        mAccount(state, payload) {
            state.account = payload;
        },
        mPwd(state, payload) {
            state.pwd = payload;
        }
    },
    actions: {
        aAccount({commit}, payload) {
            commit('mAccount', payload);
        },
        aPwd({commit}, payload) {
            commit('mPwd', payload);
        }
    },
    modules: {}
});
