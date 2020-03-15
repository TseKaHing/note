## diff

## https

## js 事件循环

js 是单线程的，他主要利用事件回调的方式进行非阻塞 I/O
js 先执行同步任务，再执行异步任务，同步任务进入主线程，异步任务进入任务队列
主线程只会不断地从任务队列里面取消息，执行消息，当消息队列为空，就会等待任务队列为非空，而且主线程只有在将当前的消息执行完成后，才会读取下一个消息

## 用 promise 写一个 delay 函数

```
const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
)
```

## nodejs 项目上线出问题怎么处理

日志、pm2、埋点、性能监控、自动化构建项目

## vue-router 实现原理

挂载 dom

1. hash
2. history
3. abstract

## 对象数组去重

## 发布订阅者模式

## 304
