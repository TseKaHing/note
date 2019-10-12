## 简单描述一下 Promise

1. Promise 是异步编程的一种解决方案
2. Promise 可以解决异步回调的问题，但 Promise 本身是同步的
3. Promise 本质上一个构造函数，它可以获取异步操作的消息
4. 从本意上将，它是一种承诺，承诺它经过一段时间之后会给你一个结果
5. Promise 用三种状态，pending，fulfiled，rejected
6. Promise 状态一旦改变，就不会再改变
7. 创建 Promise 实例后，它会立即执行
8. Promise 自身上有 all()，resolve()，reject()方法，原型上有 then(),catch()方法

## 什么是地狱回调？

地狱回调就是指回调嵌套层数过多，导致代码繁琐的情况

## Promise 的作用？为什么要用 Promise？

1. 为了解决地狱回调
2. Promise 可以支持多个并发请求，获取并发请求中的数据
