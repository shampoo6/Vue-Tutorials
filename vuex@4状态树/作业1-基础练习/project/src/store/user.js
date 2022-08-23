export default {
    namespaced: true,
    strict: true,
    state() {
        return {
            users: [
                {name: '小明', sex: 'male', age: 16},
                {name: 'Amy', sex: 'female', age: 24},
                {name: 'John', sex: 'other', age: 30}
            ],
            name: '',
            sex: 'other',
            age: 0
        }
    },
    mutations: {
        mUsers(state, payload) {
            state.users = payload
        },
        mName(state, payload) {
            state.name = payload
        },
        mSex(state, payload) {
            state.sex = payload
        },
        mAge(state, payload) {
            state.age = payload
        }
    },
    actions: {
        aName({commit}, payload) {
            commit('mName', payload)
        },
        aSex({commit}, payload) {
            commit('mSex', payload)
        },
        aAge({commit}, payload) {
            commit('mAge', payload)
        },
        // 添加一个 action 用于添加用户
        addUser({state, commit}, user) {
            state.users.push(user)
            commit('mUsers', state.users)
        }
    },
    getters: {
        allMale(state) {
            return state.users.filter(user => user.sex === 'male')
        }
    }
}