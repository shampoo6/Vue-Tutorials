<template>
    <div id="app">
        <h1>用户表</h1>
        <table border>
            <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>生日</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <!--<tr>
                <td>nickname1</td>
                <td>male</td>
                <td>{{new Date().toLocaleString()}}</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>-->
            <TR :ref="'tr' + index" v-for="(row,index) in users" :row="row" :key="row.nickname">
                <template slot-scope="scope">
                    <button @click="remove(scope.rowData)">删除</button>
                </template>
            </TR>
            </tbody>
        </table>

        <input v-model.trim="refName"/>
        <button @click="onView" ref="btn">查看</button>
    </div>
</template>

<script>
    import TR from './components/TR.vue'

    export default {
        name: 'App',
        components: {
            TR
        },
        data() {
            return {
                users: [
                    {
                        nickname: '昵称1',
                        sex: 'male',
                        birthday: new Date()
                    },
                    {
                        nickname: '昵称2',
                        sex: 'female',
                        birthday: new Date()
                    },
                    {
                        nickname: '昵称3',
                        sex: 'other',
                        birthday: new Date()
                    },
                ],
                refName: ''
            }
        },
        methods: {
            remove(row) {
                console.log(row)
                const r = confirm('是否删除？')
                if (r) {
                    this.users = this.users.filter(user => user !== row)
                }
            },
            onView() {
                console.log(this.$refs)

                let component = this.$refs[this.refName]
                if (component) {
                    if (Array.isArray(component)) {
                        component = component[0]
                    }
                    console.log(component.row)
                } else {
                    alert('请输入有效的ref名称')
                }
            }
        }
    }
</script>

<style lang="scss">
</style>
