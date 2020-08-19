## vue环境变量
> 示例在vuex数据存储的项目中

什么是“环境”？

环境指的是程序运行时，所处的地方；最常见的环境有：开发环境、生产环境、测试环境、预发布环境
- 开发环境
  - 开发过程中使用的环境
- 生产环境
  - 正式上线后使用的环境（例如远程服务器和数据库等）
- 测试环境
  - 专门用于测试的环境
- 预发布环境
  - 通常采用正式环境的数据库，但应用又只能由接受测试的人才能访问（类似于不删档封测）

#### 环境变量配置文件
```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```
内容
```
key=value # 内容时键值对
VUE_APP_MYPARAMS=1 # 变量名必须以VUE_APP_开头
```

除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

- NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
- BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。(api服务器的路径)

#### 访问环境变量
```
process.env.VUE_APP_VERSION
```

#### 关于模式mode
- development 模式用于 vue-cli-service serve
- production 模式用于 vue-cli-service  build 和 vue-cli-service test:e2e
- test 模式用于 vue-cli-service test:unit

#### 覆写模式mode
```
默认build会使用production模式，可以使用--mode来强制切换模式
"dev-build": "vue-cli-service build --mode development"
```

#### 自定义模式mode
例如我自定义一个叫 mymode 的模式
那么，我启动服务就应该像这样
```
vue-cli-service serve --mode mymode
```
然后我们的vue-cli-service就会去加载```.env```、```.env.mymode```、```.env.mymode.local```这几个环境变量配置文件
