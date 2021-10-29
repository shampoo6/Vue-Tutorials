<template>
    <div id="app">
        <!--        <div><label>Count: </label> {{count}}</div>-->
        <div><label>Count: </label> {{count}}</div>
        <div><label>userCount: </label> {{userCount}}</div>
        <div><label>user/count: </label> {{userSpaceCount}}</div>
        <div><label>Name: </label> {{name}}</div>
        <div><label>Sex: </label> {{sex}}</div>
        <div><label>Money(dollar): </label> {{dollar}}</div>
        <div><label>Money(US): </label> {{US}}</div>
        <div><label>Money(UK): </label> {{UK}}</div>
        <div>
            <!--<input type="number" v-model.number="step"/>-->
            <button @click="increase">添加</button>
            <button @click="a_name('张三'+Date.now())">修改name</button>
            <button @click="a_name('female'+Date.now())">修改sex</button>
            <input type="number" v-model.number="money"/>
            <!-- 全局模式的模块 调用方法和之前的一样 -->
            <button @click="$store.dispatch('user/a_userCount', Date.now())">修改userCount</button>
            <!-- 在调用带命名空间的函数时 请加上模块名称作为前缀 -->
            <button @click="$store.dispatch('user/a_increase', 100)">修改user中的count</button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {createNamespacedHelpers} from 'vuex'

    // 此处构建一个具备命名空间的 mapState 叫做 userMapState
    // userMapState 使用方法和 mapState 完全一样
    const userMapState = createNamespacedHelpers('user').mapState


    export default {
        name: 'App',
        data() {
            return {}
        },
        mounted() {
            // let result = mapState({
            //     // 此处的state 相当于 this.$store.state
            //     myCount: state => state.count,
            //     myName: state => state.name,
            //     mySex: state => state.sex
            // })
            // console.log(result)

            // let result = mapActions({
            //     setName: 'a_name',
            //     setSex: 'a_sex'
            // })
            // let result = mapActions([
            //     'a_name', 'a_sex'
            // ])
            // console.log(result)
        },
        methods: {
            increase() {
                // 掉哟个store的dispatch函数发送一个事件来调用action
                // 第一个参数：action的名字
                // 第二个参数: 传递给action的参数
                // dispatch 函数返回一个promise
                this.$store.dispatch('a_increase', this.step)
                // this.$store.dispatch('a_increase', this.step).then(() => {
                //     // 当state中的参数被修改完成后将执行then的代码
                //     this.count = this.$store.state.count
                // })
            },
            // mapActions 将 this.a_name 等函数 映射到 this.$store.dispatch('a_name')
            ...mapActions([
                'a_name', 'a_sex'
            ])
            // ...mapActions({
            //     setName: 'a_name', // 访问 this.setName 等价于 访问 this.$store.dispatch('a_name')
            //     setSex: 'a_sex'
            // })
        },
        computed: {
            // ...mapState({
            //     // 此处的state 相当于 this.$store.state
            //     myCount: state => state.count,
            //     myName: state => state.name,
            //     mySex: state => state.sex
            // }),

            // 使用mapState来声明计算属性，直接将计算属性绑定为store.state中的属性值
            ...mapState(['name', 'sex']),

            // 通过计算属性来读取 state 中的值
            count() {
                return this.$store.state.count
            },
            // 使用计算属性的访问器来实现属性的双向绑定
            step: {
                // 读值函数
                get() {
                    return this.$store.state.step
                },
                // 赋值函数
                set(value) {
                    this.$store.dispatch('a_step', value)
                }
            },
            money: {
                get() {
                    return this.$store.state.money
                },
                set(value) {
                    this.$store.dispatch('a_money', value)
                }
            },
            dollar() {
                // 通过 getter 读取数据
                return this.$store.getters.dollar
            },
            US() {
                return this.$store.getters.getMoney('US')
            },
            UK() {
                return this.$store.getters.getMoney('UK')
            },
            userCount() {
                // state 后面的 user 属性是模块的名称
                return this.$store.state.user.userCount
            },
            userSpaceCount() {
                // 这是user命名空间下的count属性
                return this.$store.state.user.count
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
