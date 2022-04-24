// 知识点
// 集成步骤
//      1. 创建 store 对象
//      2. 添加 store 配置
//      3. 至少配置 state mutations actions
//      4. 导出 store
//      5. 在 main.js 中 安装 store 插件

import {createStore} from 'vuex';

const store = createStore({
    // state 应用程序的状态
    // 是个函数，返回状态对象，类似于组件中的 data
    state() {
        return {
            count: 0
        };
    },
    mutations: {
        // 声明对应 state 的 mutation
        // state 当前仓库中的状态
        mCount(state, payload) {

            // mutation 必须是个同步函数

            console.log(state);
            console.log(payload);
            state.count = payload;
        }
    },
    actions: {
        // store 的一个操作
        // context: store 上下文对象，里面包含了 store 的一些信息和操作
        // payload: 调用时的参数
        async aCount(context, payload) { // action 可以是个异步函数
            // commit 函数用于调用 mutations
            // 第一个参数：mutation 的名称
            // 第二个参数：传入给 mutation 的 payload
            context.commit('mCount', payload);

            // action 可以存在返回值
            return 'ok'
        }
    }
});

export default store;
