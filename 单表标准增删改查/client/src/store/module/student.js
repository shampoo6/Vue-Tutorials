import studentApi from '@/api/student.js'

export default {
    strict: true,
    namespaced: true,
    state() {
        return {
            // 表格数据
            tableData: [
                {
                    _id: 1,
                    name: '张三',
                    sex: 'male',
                    age: 15,
                    createTime: Date.now(),
                    updateTime: Date.now()
                },
                {
                    _id: 1,
                    name: '张三',
                    sex: 'male',
                    age: 15,
                    createTime: Date.now(),
                    updateTime: Date.now()
                },
                {
                    _id: 1,
                    name: '张三',
                    sex: 'male',
                    age: 15,
                    createTime: Date.now(),
                    updateTime: Date.now()
                }
            ],
            // 总数据量
            total: 100
        }
    },
    mutations: {
        m_tableData(state, payload) {
            state.tableData = payload
        },
        m_total(state, payload) {
            state.total = payload
        }
    },
    actions: {
        // 查询分页数据
        a_query({commit}, {page, size, name, sex}) {
            // 若在 actions 中出现了异步请求的代码 那么action函数请返回一个 promise 对象
            return new Promise(resolve => {
                // 发起网络请求拉取数据
                studentApi.query(page, size, name, sex).then(({data, total}) => {
                    // data 表格数据
                    // total 总数据量
                    commit('m_tableData', data)
                    commit('m_total', total)
                    resolve()
                })
            })
        }
    }
}
