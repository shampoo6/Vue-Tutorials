// 知识点
// 什么是 mapState 和 mapActions
// 应用场景


// 什么是 mapState 和 mapActions
// mapState 和 mapActions 是 vuex 提供的辅助函数，用来返回一组状态或操作的函数

// 应用场景
// mapState 用于将 state 映射到组件的 computed 中
// mapActions 用于将 actions 映射到组件的 methods 中

import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            name: '张三',
            sex: 'male',
            age: 16
        };
    },
    mutations: {
        mName(state, payload) {
            state.name = payload;
        },
        mSex(state, payload) {
            state.sex = payload;
        },
        mAge(state, payload) {
            state.age = payload;
        },
    },
    actions: {
        aName({commit}, payload) {
            commit('mName', payload);
        },
        aSex({commit}, payload) {
            commit('mSex', payload);
        },
        aAge({commit}, payload) {
            commit('mAge', payload);
        },

    }
});

export default store;
