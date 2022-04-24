// 知识点
// 什么是getter
// 应用场景
// 使用方法


// 什么是getter？
// getter就是一个访问控制的函数，可以控制读取 state 时得到的值

// 应用场景
// getter 可以理解成类似组件的 computed 计算属性，所以应用场景类似计算属性

import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            todos: [
                {text: 'todo1', active: true},
                {text: 'todo2', active: false},
                {text: 'todo3', active: true},
            ]
        };
    },
    mutations: {
        mTodos(state, payload) {
            state.todos = payload;
        }
    },
    getters: {
        // getter 本质上就是一个函数
        // state：是当前 store 对象的状态
        activeTodos(state) {
            return state.todos.filter(todo => todo.active);
        }
    }
});

export default store;