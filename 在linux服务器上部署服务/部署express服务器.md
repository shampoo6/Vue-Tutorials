## 部署express服务器
部署服务器，可以通过git部署，也能通过压缩包部署

由于git网速问题，这里选择通过压缩包部署

先安装解压工具unzip

在centos上执行 ```yum install unzip```

然后将要部署的项目打包压缩成 ```.zip``` 文件

将该文件放入服务器，使用 unzip 解压

最后在服务器上执行 node 命令启动

#### 后台启动服务器
安装 pm2 服务管理工具
```
npm install pm2 -g
```

创建 pm2 软连接
```
ln -s /opt/node/node-v14.0.0-linux-x64/lib/node_modules/pm2/bin/pm2 /usr/bin/pm2
```
pm2 常用命令

| 命令 | 作用 |
| --- | --- |
| pm2 list | 查看服务列表 |
| pm2 start npm --name my-server -- run start | 以指定命令运行服务 |
| pm2 stop my-server | 停止指定服务 |
| pm2 delete my-server | 从pm2列表中删除服务 |

#### 配置防火墙白名单
```
firewall-cmd --add-port=10406/tcp --permanent;firewall-cmd --reload
```
