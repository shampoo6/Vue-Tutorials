# vuex安装与集成

## 安装

```shell
npm i vuex
```

## 集成

- 在 `src` 文件夹下创建 `store` 文件夹

- 在 `store` 文件夹中创建 `index.js` 文件

- 初始化 `index.js` 文件

  ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  
  // 安装vuex
  Vue.use(Vuex)
  
  // 创建store对象
  const store = new Vuex.Store({
      // 声明三要素 state mutation action
  
      // state 数据状态 用于存放多页面间共享的数据
      state() {
          return {
              count: 0
          }
      },
  
      // mutations 修改状态的函数 在严格模式下 只能通过mutation修改状态
      mutations: {
          // mutation 中的函数 用于修改state状态
          // state: 当前状态 可以在 mutation 中修改
          // payload: 调用mutation函数时 传递的参数
          m_count(state, payload) {
              state.count = payload
          }
      },
  
      // actions 用于发出修改状态的指令
      actions: {
          // store: 当前的store对象
          // payload: 调用 action 函数时 传递的参数
          a_count(store, payload) {
              // 在 actions 中主要需要获取修改数据的数据源，并调用mutation修改状态
              // 所以 此处可以发起网络请求，获取数据源
  
              // 使用 commit 函数来调用 mutation
              // 使用 store.commit 发出指令
              // 第一个参数：mutation 的名字
              // 第二个参数：传递给mutation的参数
              store.commit('m_count', payload)
          }
      }
  })
  
  // 导出
  export default store
  ```

- 集成 `store` 到 `main.js` 中

## 使用

### 读取状态

在组件或页面中使用 `this.$store.state` 就可以读取状态了

但通常来说，我们希望在状态变化时页面也随之变化，所以可以使用计算属性

```vue
<template>
    <div class="home">
        count: {{sCount}}
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                // 这里赋值是给组件添加初始值
                // 后续状态变化 count 的值不会跟着变
                // count: this.$store.state.count, // 读取 vuex 状态
            }
        },
        computed: {
            // 标准的读取状态的方法应该是使用计算属性来读取vuex的状态
            sCount() {
                return this.$store.state.count
            }
        }
    }
</script>
```

## 赋值状态

```vue
<template>
    <div class="home">
        count: {{sCount}}
        <div>
            <input v-model.number="num"/>
            <button @click="modifyCount">修改count</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                num: 0
            }
        },
        methods: {
            modifyCount() {
                // 通过 store.dispatch 函数 调用 vuex 的 action
                // 第一个参数是 action 的名字
                // 第二个参数是传给 action 的 payload
                this.$store.dispatch('a_count', this.num)
            }
        },
        computed: {
            sCount() {
                return this.$store.state.count
            }
        }
    }
</script>
```