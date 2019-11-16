## JavaScript 的数据类型

基本数据类型：Number，String，Boolean，Undefined，Null

复杂数据类型：Object，Array，Function，RegExp，Date，Error

全局数据类型：Math

ES6 新增数据类型: Symbol

## 如何改变函数内部 this 指针的指向函数？

bind(一般用作兼容，有些浏览器不兼容 call/apply)、call、apply
假设要改变 fn 内部的 this 指向，指向 obj，fn.call(obj)或者 fn.apply(obj)

### call 和 apply 的区别？

1.参数
它们的第一个参数一样，表示调用该函数的对象 obj，apply 的第二个参数是数组，是[arg1,arg2,arg3]这种形式，而 call 是 arg1,arg2,arg3 这样的形式

## JavaScript 中的作用域

JavaScript 中的作用域指的是变量的作用域
当需要访问一个变量的时候，先从最内层的作用域开始查找，如果没找到就到该对象的原型对象中去查找，还是没有的话，继续往外一层一层去找，最外层为 window 对象

## JavaScript 的闭包

闭包简单来说就是一个函数能访问外部函数的变量

```
function a(x){
var tem=3;
function b(y){
console.log(x+y+(++tem));
}
}
```

a 函数中的 b 函数就是闭包了

## 使用 new 关键字发生了什么？

1. 新建一个空对象 var obj = {}
2. 把原对象的 prototype 赋值给新的对象的'_proto_' obj._proto_ = originObj.prototype
3. 让原对象的 this 指向新的对象 var result = originObj.call(obj)
4. 判断返回值类型，将返回值转换成对象类型 return typeof result === 'obj'? result : obj

## JavaScript 单线程模型怎样去处理并发操作？

JavaScript 是单线程模型，它利用事件回调的方式非阻塞 I/O
JavaScript 会先执行同步任务（进入浏览器主线程），再执行异步任务（不进入主线程，而进入任务队列），异步任务会被加入到任务队列（只有任务队列通知主线程某个异步任务可以执行，该异步任务才可以进入主线程执行）

## JavaScript 执行上下文栈

函数多了，就有多个函数执行上下文，每次调用函数创建一个新的执行上下文，那如何管理创建的那么多执行上下文呢？
JavaScript 执行在单线程上，所有的代码都是排队执行。
一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入执行栈的顶部。
每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行完成后，当前函数的执行上下文出栈，并等待垃圾回收。
浏览器的 JS 执行引擎总是访问栈顶的执行上下文。
全局上下文只有唯一的一个，它在浏览器关闭时出栈。
