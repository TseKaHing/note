## 新建一个本地分支
`git checkout -b feature/mine`
## 查看分支状态
`git branch`
将新建的本地分支push到远程服务器，远程分支与本地分支同名(也可以随便取)
`git push origin feature/mine:feature/mine`
## 查看所有分支
`git branch -a`
看到`remotes/origin/feature/mine`分支表示新建远程分支成功
## 删除远程分支
### 第一种方式
`git push origin :feature/mine`
### 第二种方式
`git push origin —delete feature/mine`