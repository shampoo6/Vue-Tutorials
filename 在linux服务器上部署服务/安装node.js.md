## 安装node.js
在centos7下 使用 ```uname -a``` 命令查看对应cpu版本，在官网上下载 node.js

下载文件如：node-v14.0.0-linux-x64.tar.xz

将下载好的文件通过winscp放入虚拟机

![](.安装node.js_images/e6d05f5d.png)

打开 putty 进入 node-v14.0.0-linux-x64.tar.xz 文件所在目录，执行以下命令解压：
```shell script
tar -xvf node-v14.0.0-linux-x64.tar.xz
```

解压完成后，给解压后的bin目录中的node、npm、npx建立软连接
```shell script
ln -s /opt/node/node-v14.0.0-linux-x64/bin/node /usr/local/bin/
ln -s /opt/node/node-v14.0.0-linux-x64/bin/npm /usr/local/bin/
ln -s /opt/node/node-v14.0.0-linux-x64/bin/npx /usr/local/bin/
```

最后验证node.js
```shell script
node -v
# 输出 ===> v14.0.0
```
