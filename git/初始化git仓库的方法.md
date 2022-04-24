# 初始化git仓库的方法

- 创建远程仓库(创建好远程仓库后，可以有两种方法来创建本地仓库)
  - `git init`
    - `git init` 创建的仓库无法直接和远程仓库建立关联，必须在仓库中加入任一文件
    - 所以操作流程如下：
      - `git init`
      - 在仓库中创建一个 `.gitkeep` 文件
      - `git add .`
      - `git commit -m "init"`
      - `git push`
      - `git remote add origin <url>` 添加要推送代码的远程仓库地址 url就是仓库地址
      - `git push --set-upstream origin master` 设置默认推送地址位 master 主枝
      - 执行完成后，以后的所有 `git push` 命令都可以不带参数执行了
  - `git clone` 克隆仓库
    - `git clone <url>` url 是远程仓库的地址

> `git clone` 多用于克隆已有的远程仓库到本地
> `git init` 多用于从零开始初始化一个本地仓库
