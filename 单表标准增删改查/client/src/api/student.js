import axios from '@/utils/axios.js'

// 将所有网络请求封装到api中
// api 中的函数大多返回一个 promise 对象

export default {
    // 查询表格
    query(page, size, name, sex) {
        return new Promise(resolve => {
            axios.post('/query', {page, size, name, sex}).then(result => {
                resolve(result.data)
            })
        })
    },
    add(name, sex, age) {
        return new Promise(resolve => {
            axios.post('/add', {name, sex, age}).then(result => {
                resolve(result.data)
            })
        })
    },
    edit(id, name, sex, age) {
        return new Promise(resolve => {
            axios.post('/edit', {id, name, sex, age}).then(result => {
                resolve(result.data)
            })
        })
    },
    getOne(id) {
        return new Promise(resolve => {
            axios.post('/getOne', {id}).then(result => {
                resolve(result.data)
            })
        })
    },
    remove(ids) {
        return new Promise(resolve => {
            axios.post('/remove', {ids}).then(result => {
                resolve(result.data)
            })
        })
    }
}
