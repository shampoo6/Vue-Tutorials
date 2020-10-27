# 项目结构
   
项目中有以下文件夹或文件

```shell script
node_modules # npm安装的包放在其中
public # 开发服务器上的静态资源文件夹
src # 源代码所在文件夹
.gitignore # git的忽略文件配置
babel.config.js # babel编译器的配置
pacakge.json # node.js项目配置
package-lock.json # 描述node.js项目运行时，依赖模块的固定版本号
README.md # 项目的描述文件
```

src下的目录结构
```shell script
assets # 资源文件
components # 存放vue组件的目录
App.vue # 页面入口
main.js # 程序的入口
```

## 项目脚本
- serve：启动服务
- build：构建项目（构建出来的静态资源，需要放到服务器上进行访问）
- lint：为了提高代码质量，检测源代码是否存在不规范书写内容