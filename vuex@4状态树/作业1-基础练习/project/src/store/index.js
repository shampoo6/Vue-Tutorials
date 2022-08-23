import {createStore} from 'vuex'
import user from '@/store/user'

const store = createStore({
    modules: {user},
    state() {
        return {
            text: ''
        }
    },
    mutations: {
        mText(state, payload) {
            state.text = payload
        }
    },
    actions: {
        aText({commit}, payload) {
            commit('mText', payload)
        }
    }
})

export default store