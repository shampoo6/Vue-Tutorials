import {createStore} from 'vuex'
import goods from './goods'
import shoppingCar from './shoppingCar'

export default createStore({
    modules: {
        goods,
        shoppingCar
    },
    state() {
        return {}
    },
    getters: {},
    mutations: {},
    actions: {},
})
