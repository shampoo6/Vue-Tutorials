import {createStore} from 'vuex';

export default createStore({
    state() {
        return {
            tableData: []
        };
    },
    getters: {},
    mutations: {
        mTableData(state, payload) {
            state.tableData = payload;
        }
    },
    actions: {
        // payload 是一个学生对象
        addStudent({commit, state}, payload) {
            const param = {...payload};
            const tb = [...state.tableData];
            tb.unshift(param);
            commit('mTableData', tb);
        },
        // 批量删除
        // payload 是一个id数组
        remove({commit, state}, payload) {
            const tb = state.tableData.filter(stu => !payload.includes(stu.id));
            commit('mTableData', tb);
        },
        // payload 是一个学生对象
        updateStudent({commit, state}, payload) {
            const tb = [...state.tableData];
            const stu = tb.find(stu => stu.id === payload.id);
            for (const key in stu) {
                stu[key] = payload[key];
            }
            commit('mTableData', tb);
        }
    },
    modules: {}
});
