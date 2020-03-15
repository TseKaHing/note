## nodejs 简介

`nodejs`是一种`JavaScript`的运行环境，`nodejs`集成了`npm`包管理工具

## nodejs 安装

1. 进入`nodejs`官网`https://nodejs.org/en/`，选择下载版本，推荐安装最新的稳定版本
2. 使用`node -v`命令可以查看`nodejs`版本，查看成功，即安装成功

## cnpm

`cnpm`是淘宝`npm`镜像
`cnpm`下载速度较`npm`下载速度快，假如`npm`下载失败，可以尝试切换到`cnpm`下载

### 安装 cnpm

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

## nrm

`nrm`是`npm`的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 `npm` 源间切换

## nrm 安装

`npm install -g nrm`

## 查看 nrm 源

`nrm ls`

## 切换 nrm 源

`nrm use taobao`

## Koa2 和 Express 的区别？

1. Koa2 相比 express 更加精巧
2. Koa2 是洋葱模型，Express 是直线型
3. Express 的路由做的更好
4. Koa2 比较几乎都是依赖中间件去实现功能，依赖 context 来提供上下文服务

## 为什么 Express 可以监听端口？

## NodeJS 事件循环机制？

## NodeJS 模块加载原理？

## Koa2 洋葱模型

## NodeJS 模块加载机制

优先级从上到下递减

1. 缓存加载
2. 核心模块加载
3. 以路径形式引入的模块
4. 自定义的模块

## NodeJS 时间循环机制

定时器：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
待定回调：执行延迟到下一个循环迭代的 I/O 回调。
idle, prepare：仅系统内部使用。
轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞。
检测：setImmediate() 回调函数在这里执行。
关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。
