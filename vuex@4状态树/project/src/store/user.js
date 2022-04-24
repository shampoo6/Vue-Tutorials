export default {
    // 此处配置和根节点相同，请至少写 state mutations actions
    state() {
        return {
            nickname: '法外狂徒',
            headIcon: ''
        };
    },
    // mutations 和 actions 默认情况下，会被注册到全局 store 对象
    // 所以当要调用他们时，就和调用 store/index.js 中的 mutations 和 actions 一样
    mutations: {
        mNickname(state, payload) {
            state.nickname = payload;
        },
        mHeadIcon(state, payload) {
            state.headIcon = payload;
        }
    },
    actions: {
        aNickname({commit}, payload) {
            commit('mNickname', payload);
        },
        aHeadIcon({commit}, payload) {
            commit('mHeadIcon', payload);
        },
    }
};