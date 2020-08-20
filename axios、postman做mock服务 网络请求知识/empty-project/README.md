# empty-project
#### 安装axios
```shell script
npm i axios
```

#### 创建axios
```js
import axios from 'axios' // 引入axios

console.log(`api服务器地址为：${process.env.VUE_APP_BASE_URL}`)
const _axios = axios.create({baseURL: process.env.VUE_APP_BASE_URL})

Vue.prototype.$axios = _axios
```
