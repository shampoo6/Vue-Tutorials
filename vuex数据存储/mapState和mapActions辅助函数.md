# mapState和mapActions辅助函数
mapState 可以将 store.state 映射到 this 的 computed 中
mapActions 可以将 store 里的 actions 映射到 this 的 methods 中

```js
import {mapState, mapActions} from 'vuex'

export default {
    computed: {
        // 映射 stateA stateB 到当前组件
        // 这样就可以使用 this.stateA 和 this.stateB 来调用了
        ...mapState(['stateA', 'stateB'])
        // 可以更换 state 的名称
        // ...mapState({
        //     // 此处的state 相当于 this.$store.state
        //     myCount: state => state.count,
        //     myName: state => state.name,
        //     mySex: state => state.sex
        // })
    },
    methods: {
        // 映射 actionA actionB 到当前组件
        // 这样就可以使用 this.actionA(payload) 和 this.actionB(payload) 来调用了
        ...mapActions(['actionA', 'actionB'])

        // 可以更换 action 的名称
        // ...mapActions({
        //     setName: 'a_name', // 访问 this.setName 等价于 访问 this.$store.dispatch('a_name')
        //     setSex: 'a_sex'
        // })
    }
}
```

## 带命名空间的 mapState 和 mapActions
```js
import {createNamespacedHelpers} from 'vuex'

// 经过 createNamespacedHelpers 创建的 mapState 和 mapActions 在使用的时候就不用带上命名空间前缀了
const {mapState, mapActions} = createNamespacedHelpers('user')
```
