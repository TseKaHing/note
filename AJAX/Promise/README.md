## 简单描述一下 Promise

1. Promise 是异步编程的一种解决方案
2. Promise 可以解决异步回调的问题，但 Promise 本身是同步的
3. Promise 本质上是一个构造函数，它可以获取异步操作的消息
4. 从本意上将，它是一种承诺，承诺它经过一段时间之后会给你一个结果
5. Promise 有三种状态，pending，fulfiled，rejected
6. Promise 状态一旦改变，就不会再改变
7. 创建 Promise 实例后，它会立即执行
8. Promise 自身上有 all()，resolve()，reject()方法，原型上有 then(),catch()方法

## 什么是地狱回调？

地狱回调就是指回调嵌套层数过多，导致代码繁琐的情况

## Promise 的作用？为什么要用 Promise？

1. 为了解决地狱回调
2. Promise 可以支持多个并发请求，获取并发请求中的数据

## Promise 链式调用如何中断

当 Promise 状态从 pending 状态转换成 fulfill 或者 reject 的时候，then 调用结束，所以我们我们可以强制把 Promise 转成 fulfill 或者 resolve 状态

## Promise.all 是并发还是并行？

并行（同时执行多个异步请求）

## 并行和并发的区别

并行和并发都是高效完成多任务的解决方案

1. 并行：多个进程同时可以运行，互不影响（一个老师同时辅导多个学生）
2. 并发：多个进程同时发生，但需要在这多个进程里面相互切换（一个老师在辅导 A 学生，A 学生在想问题的时候，老师同时辅导 B 同学）

## 用 promise 写一个 delay 函数

```
const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
)
```
