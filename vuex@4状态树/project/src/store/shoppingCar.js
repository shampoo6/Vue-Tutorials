export default {
    // 开启模块的命名空间
    namespaced: true,
    state() {
        return {
            goods: [
                '冰箱',
                '电视'
            ],
            userInfo: {
                balance: 100,
                name: '老王'
            }
        };
    },
    mutations: {
        // 若开启命名空间 则 mutations 和 actions 中的函数名可以独立于根节点存在
        mGoods(state, payload) {
            state.goods = payload;
        },
        mUserInfo(state, payload) {
            state.userInfo = payload;
        }
    },
    actions: {
        // 追加商品, payload 就是新商品名称
        insertGoods(context, payload) {
            const goods = [...context.state.goods];
            goods.push(payload);
            context.commit('mGoods', goods);
        },

        // 在具备命名空间的模块中，声明全局 actions
        aGoods: {
            root: true, // 让该actions变成全局(根节点)的action
            handler: (context, payload) => {
                context.commit('mGoods', payload);
            }
        },
        changeName({commit, dispatch}, payload) {
            // 转发给根节点的actions
            // 第三个参数指定转发actions到根节点
            // dispatch('aName', payload, {root: true});

            // 调用根节点 mutations
            commit('mName', payload, {root: true});
        },
        aUserInfo({commit, state}, payload) {
            let userInfo = {...state.userInfo};
            userInfo.balance = payload.balance;
            userInfo.name = payload.name;
            commit('mUserInfo', userInfo);
        }
    }
};