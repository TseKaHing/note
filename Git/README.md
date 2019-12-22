## git安装
1. 下载`git`，`mac`操作系统可进入https://git-scm.com/download/mac 自行下载
官网下载速度很快，最好翻墙或者使用加速器，具体请看`shadowsocks`详解
2. 初始化git配置
```
git config --global user.name "xiejiaxing"(用户名)
git config --global user.email "xiejiaxing@forchange.tech"(邮箱)
```
3. 验证是否安装成功
`git --version`

## 使用 git 将本地文件上传到远程仓库
1. `git init`在本地文件根目录初始化该项目的`git`
2. 创建一个远程仓库
3. 获取上一步创建的远程仓库的`url`，并在本地项目设置远程仓库的`url`，`git remote add origin url`
4. 首次提交需要先从远程仓库拉取项目`git pull --rebase origin master`
5. `git add .`将所有修改过的工作文件提交暂存区
6. `git commit -m "msg"`将暂存区的文件提交给本地仓库
7. `git push origin master`将本地仓库中上传到远程仓库

## 新建一个本地分支
`git checkout -b feature/mine`
## 查看分支状态
`git branch`
将新建的本地分支`push`到远程服务器，远程分支与本地分支同名(也可以随便取)
`git push origin feature/mine:feature/mine`
## 查看所有分支
`git branch -a`
看到`remotes/origin/feature/mine`分支表示新建远程分支成功
## 删除远程分支
### 第一种方式
`git push origin :feature/mine`
### 第二种方式
`git push origin —delete feature/mine`

## shadowsocks 作用
`shadowsocks`可以翻墙，也可以做网络加速器，可以把本地`IP`代理到墙外服务器

## shadowsocks 配置流程
1. 进入`shadowsocks`下载地址https://help.fengye.la/replay.html，里面有支持`Windows，Mac OS X，Linux，Android，iOS`的客户端
2. 以`Mac`操作系统为例，选择下载`Mac OS X`客户端，按照`Mac OS X`里面的教程https://help.fengye.la/replay/sub_mac.html操作即可

## issues
1. 按照教程操作，需要购买服务，这里提供几个稳定的服务器节点，将订阅地址改成以下地址之一即可使用
```
// 公有
https://cdnapi.fyapi.net/index.php?m=fyzhujicloudpane&command=FYAUTHAPISsrJsonSub&port=25853&authcode=FYZHUJI0939BcwAM9lS19SZ5w6

// Matrix专用（三行分别是三条订阅）
https://cdnapi.fyapi.net/index.php?m=fyzhujicloudpane&command=FYAUTHAPISsrJsonSub&port=75571&authcode=FYZHUJI1037bAsAbXJswmcoey3
https://cdnapi.fyapi.net/index.php?m=fyzhujicloudpane&command=FYAUTHAPISsrJsonSub&port=115081&authcode=FYZHUJI0924BqEW7AQt7gYrsOX
https://cdnapi.fyapi.net/index.php?m=fyzhujicloudpane&command=FYAUTHAPISsrJsonSub&port=115084&authcode=FYZHUJI0936zHR1b5noJIfAlrS
```

