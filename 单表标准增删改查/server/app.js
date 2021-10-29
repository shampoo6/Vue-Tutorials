const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {Schema, model} = mongoose
const app = express()
const port = 80

const schema = new Schema({
    name: {type: String, index: true, required: true},
    sex: {type: String, index: true, required: true},
    age: {type: Number, index: true, required: true},
    createTime: {type: Number, default: Date.now(), index: true, required: true},
    updateTime: {type: Number, default: Date.now(), index: true, required: true},
})

const Student = model('student', schema)

// 添加跨域响应头
app.use(cors())

// 添加参数解析器
app.use(express.json())

// 创建假数据的接口
app.get('/insertTestData', (req, res) => {
    const count = 100
    const names = ['张三', '李四', '王五']
    const sexs = ['male', 'female', 'other']
    let id = 0
    let datas = []
    for (let i = 0; i < count; i++) {
        datas.push({
            name: names[Math.floor(Math.random() * 3000) % names.length] + id,
            sex: sexs[Math.floor(Math.random() * 3000) % sexs.length],
            age: Math.floor(Math.random() * 100)
        })
        id++
    }
    Student.insertMany(datas).catch(reason => {
        console.error(reason)
    })
    res.json({msg: 'ok'})
})

// 查询
app.post('/query', (req, res) => {
    const {page, size, name, sex} = req.body

    // 构造查询条件
    let query = {}
    if (name && typeof name === 'string' && name.trim() !== '') {
        query.name = {
            $regex: `^[\\s\\S]*${name}[\\s\\S]*$`
        }
    }
    if (sex && typeof sex === 'string' && sex.trim() !== '') {
        query.sex = sex
    }

    console.log(query)

    // 查询表格数据
    Student.find(query, '-__v', {
        sort: {updateTime: -1},
        skip: (page - 1) * size,
        limit: size
    }).then(result => {
        // 查询数据总量
        Student.count(query).then(count => {
            res.json({data: result, total: count})
        })
    }).catch(reason => {
        console.error(reason)
        res.json({data: [], total: 0})
    })
})

app.post('/add', (req, res) => {
    let {name, sex, age} = req.body
    const student = new Student({name, sex, age})
    student.save().then(result => {
        res.json({msg: 'ok', data: result})
    }).catch(reason => {
        console.error(reason)
        res.json({msg: 'fail', data: null})
    })
})

app.post('/edit', (req, res) => {
    let {id, name, sex, age} = req.body
    Student.updateOne(
        {_id: id},
        {$set: {name, sex, age, updateTime: Date.now()}}
    ).then(result => {
        res.json({msg: 'ok', data: result})
    }).catch(reason => {
        console.error(reason)
        res.json({msg: 'fail', data: null})
    })
})

app.post('/getOne', (req, res) => {
    const id = req.body.id
    Student.findById(id).then(result => {
        res.json({msg: 'ok', data: result})
    }).catch(reason => {
        console.error(reason)
        res.json({msg: 'fail', data: null})
    })
})

app.post('/remove', (req, res) => {
    const ids = req.body.ids
    Student.deleteMany({_id: {$in: ids}}).then(result => {
        res.json({msg: 'ok', data: result})
    }).catch(reason => {
        console.error(reason)
        res.json({msg: 'fail', data: null})
    })
})

app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1`)
    mongoose.connect('mongodb://192.168.3.104:27017/mydb2', {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection
    db.on('error', err => {
        console.error(err)
    })
    db.once('open', () => {
        console.log('db connected')
    })
})
