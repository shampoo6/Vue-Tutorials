# vuex模块
vuex 中独立一块业务数据可以单独抽象成一个模块 这个模块包含某种业务所需的所有数据

例如：用户信息、每张表格页面都可抽象一个独立模块（例如 学生页对应学生模块、图书页对应图书模块）

## 模块的内容
一个模块包含store中所包含的所有内容：
- state
- mutation
- action
- getter
- module

## 命名空间和辅助类
- 模块上添加 namespaced: true
- 具备命名空间的 state action 需要在使用的时候加上命名空间前缀
```js
// 获取具备命名空间的state
store.state.user.info // 此处的 user 就是命名空间
// 调用具备命名空间的action
store.dispatch('user/login') // 此处 user/ 时命名空间
```
