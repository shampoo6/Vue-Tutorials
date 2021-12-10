## 大纲
#### 配置个人信息
```shell script
git config --global user.name "xxxx"
git config --global user.email "xxxxx@qq.com"
```
#### 创建仓库
- 本地创建
```shell script
git init
```
- 远程仓库创建
- clone项目
```shell script
git clone url
```
#### 添加
```shell script
git add path # 路径可以是文件也可以是文件夹
git add . # 添加项目下所有文件
```
#### 查看仓库状态
```shell script
git status
```
#### 删除缓存
```shell script
git rm --cached <file>
```

> 该命令```<file>```参数不能是文件夹

也可以使用
```shell script
git reset path
```

> 该命令path参数可以是文件夹，也可以是文件，但该命令主要是用于重置当前版本状态
#### 提交
```shell script
git commit -m msg
```
#### 推
```shell script
git push
```
#### 拉
```shell script
git pull origin <branchname>
```
#### 切换版本
```shell script
git reset --hard HEAD~1
# --hard 放弃本地变更，强制切换版本
# HEAD~1 上一个版本，数字1可以改为任意数字，代表回滚到前几个版本
```
### 分支操作
#### 查看分支
```shell script
git branch # 查看本地分支
git branch -a # 查看所有分支，包括远程分支
```
#### 创建分支
```shell script
git branch branchName
```
创建后，需要push新的分支到远程
```shell script
git push --set-upstream origin <branchName>
```
#### 切换分支
```shell script
git checkout <branchName>
```
#### 融合分支
```shell script
git merge <branchName>
```

### 重置git会话
有时要切换其他git账号提交项目，需要先重置git会话
```shell script
# 用管理员模式运行
git config --system --unset credential.helper
```
若依然 push 不成功，可以查看用户文件夹下是否存在 `.git-credentials` 该文件

该文件保存了用户的账号密码，删除该文件再试即可

### 保存登录凭证
```shell script
git config --global credential.helper store
```