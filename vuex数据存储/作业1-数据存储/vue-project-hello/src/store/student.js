export default {
    strict: true,
    namespaced: true,
    state: () => {
        return {
            // 学生表的数据数组
            data: [
                {
                    name: '张三',
                    sex: 'male',
                    age: 15
                }, {
                    name: '李四',
                    sex: 'female',
                    age: 24
                }, {
                    name: '老王',
                    sex: 'male',
                    age: 22
                },
            ]
        }
    },
    mutations: {
        m_data(state, payload) {
            state.data = payload
        }
    },
    actions: {
        // 添加学生
        // payload 是新增的学生对象
        addStudent(store, payload) {
            // 获取列表数据
            let data = [...store.state.data]
            // 插入数据
            data.push(payload)
            store.commit('m_data', data)
        },
        // 修改学生
        // 规定 payload 中包含 name 和 要修改的数据对象 stu
        editStudent(store, {name, stu}) {
            // 获取列表数据
            let data = [...store.state.data]
            for (let i = 0; i < data.length; i++) {
                const student = data[i]
                if (student.name === name) {
                    for (let key in student) {
                        student[key] = stu[key]
                    }
                    store.commit('m_data', data)
                    break
                }
            }
        },
        // 删除学生
        // payload 是学生的姓名
        remove(store, payload) {
            // 获取列表数据
            let data = [...store.state.data]
            let index = -1
            for (let i = 0; i < data.length; i++) {
                const student = data[i]
                if (student.name === payload) {
                    index = i
                    break
                }
            }
            if (index !== -1) {
                data.splice(index, 1)
                store.commit('m_data', data)
            }
        }
    },
    getters: {
        // 获取指定姓名的学生数据
        getOne(state) {
            return (name) => {
                let arr = state.data
                for (let i = 0; i < arr.length; i++) {
                    const stu = arr[i]
                    if (stu.name === name) {
                        return stu
                    }
                }
            }
        }
    }
}