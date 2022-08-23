export default {
    namespaced: true,
    strict: true,
    state() {
        return {
            car: [
                // 购物车内的数据结构
                // { name: '电饭煲', count: 1, price: 1 }
            ]
        }
    },
    mutations: {
        mCar(state, payload) {
            state.car = payload
        }
    },
    actions: {
        // 加入购物车
        // 第一个参数: 解构 context 得到的 commit
        // 第二个参数: 解构 payload 得到的 name 和 count
        async addGoodsToShoppingCar({state, commit}, {name, price, count}) {
            // name 商品名
            // count 数量

            // 判断购物车中是否已经存在了指定商品的名称
            let goods = state.car.find(item => item.name === name)
            if (goods) {
                goods.count += count
            } else {
                // 购物车中不存在指定商品就新增购物车
                state.car.push({
                    name,
                    price,
                    count
                })
            }

            commit('mCar', state.car)
        },
        // 修改商品数量
        async changeGoodsCount({state, commit}, {name, count}) {
            let goods = state.car.find(item => item.name === name)
            if (goods) {
                // 判断不能让数量的叠加结果小于0
                if (goods.count + count < 0) return

                // 商品存在才增减商品
                goods.count += count

                // 若商品数量为0了 应该移出购物车
                if (goods.count === 0) {
                    let i = state.car.findIndex(item => item.name === goods.name)
                    state.car.splice(i, 1)
                }

                commit('mCar', state.car)
            }
        }
    },
    getters: {
        // 计算商品总价
        total(state) {
            return state.car.length > 0 ?
                state.car
                    .map(item => item.price * item.count)
                    .reduce((p, n) => {
                        return p + n
                    }) : 0
        }
    }
}