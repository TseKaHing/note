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

### 闭包的作用

隔离作用域

```
for(var i=0;i<2;i++){
  setTimeout(function(){
    console.log(i);
  },0);
}
```

```
for(var i=0;i<2;i++){
  (function(i){
    setTimeout(function(){
      console.log(i);
    },0)
  })(i);
}
```

### 闭包的缺点

因为内部闭包函数可以访问外部函数的变量，所以外部函数的变量不能被释放，如果闭包嵌套过多，会导致内存占用大，要合理使用闭包

## 使用 new 关键字发生了什么？

1. 新建一个空对象 var obj = {}
2. 把原对象的 prototype 赋值给新的对象的'_proto_' obj._proto_ = originObj.prototype
3. 让原对象的 this 指向新的对象 var result = originObj.call(obj)
4. 判断返回值类型，将返回值转换成对象类型 return typeof result === 'obj'? result : obj

## JavaScript 单线程模型怎样去处理并发操作？

JavaScript 是单线程模型，它利用事件回调的方式非阻塞 I/O
JavaScript 会先执行同步任务（进入浏览器主线程），再执行异步任务（不进入主线程，而进入任务队列），异步任务会被加入到任务队列（只有任务队列通知主线程某个异步任务可以执行，该异步任务才可以进入主线程执行）

## 异步和同步

同步指下一个程序的执行需要等到上一个程序执行完毕，也就是得出结果后下一个才能执行
异步指的是上一个程序指向后，下一个程序不用等到上一个程序出结果就能执行，等上一个出结果了调用回调函数处理结果就好

## JavaScript 执行上下文栈

函数多了，就有多个函数执行上下文，每次调用函数创建一个新的执行上下文，那如何管理创建的那么多执行上下文呢？
JavaScript 执行在单线程上，所有的代码都是排队执行。
一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入执行栈的顶部。
每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行完成后，当前函数的执行上下文出栈，并等待垃圾回收。
浏览器的 JS 执行引擎总是访问栈顶的执行上下文。
全局上下文只有唯一的一个，它在浏览器关闭时出栈。

## JavaScript 怎么判断数据类型？instanceof 有什么缺点？

typeof instanceof

### typeof

typeof 其实就是判断参数是什么类型的实例，就一个参数
typeof 一般只能返回如下几个结果："number"、"string"、"boolean"、"object"、"function" 和 "undefined"

### instanceof

instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性
object（要检测的对象.）constructor（某个构造函数）

## javascript 中 apply、call 和 bind 的区别

apply、call 和 bind 都是用来改变函数的 this 指向
例子： a.bind(b)(param1,param2) 等价于 a.call(b,param1,param2) 等价于 a.apply(b,[param1,param2])

### 手动实现 bind 方法

```
//bind实现
/**
 * 实现思想：
 * 1、返回一个函数，其他与call, apply类似
 * 2、如果返回的函数作为构造函数，bind时指定的 this 值会失效，但传入的参数依然生效。
 */
Function.prototype.myBind = function(funcCtx) {
    let ctx = funcCtx || global
    console.log(this)
    let _this = this
    let args = [...arguments].slice(1)
    // 作为构造函数使用
    let Fbind = function() {
        let self = this instanceof Fbind ? this : ctx
        return _this.apply(self,args.concat(...arguments))
    }
    let f = function() {}
    f.prototype = this.prototype
    Fbind.prototype = new f()
    return Fbind
}

var value = 2
var foo = {
    value: 1
}
function bar(name, age) {
    this.habbit = 'shopping'
    console.log('bar this.value = ', this.value)
    console.log(name, age)
}
bar.prototype.friend = 'shuaige'
var bindFoo = bar.myBind(foo, 'testbind',111)
// 返回的函数直接调用
bindFoo()
```

### 手动实现 call 方法

```
// 手写模拟call方法的思想
/**
 * call方法思想：改变this指向，让新的对象可以执行这个方法
 * 实现思路：
 * 1、给新的对象添加一个函数（方法），并让this（也就是当前绑定的函数）指向这个函数
 * 2、执行这个函数
 * 3、执行完以后删除这个方法
 * 4、可以将执行结果返回
 */
Function.prototype.myCall = function(funcCtx) {
    // funcCtx是当前要调用函数的对象
    console.log('funcCtx = ',funcCtx)
    // this指被调用的函数
    console.log('this = ',this)
    if(typeof this != 'function') {
        throw new TypeError('Erorr')
    }
    let ctx = funcCtx || global
    console.log('arguemnets = ', arguments)
    let args = [...arguments].slice(1)
    console.log(`args = ${args}`)

    ctx.fn = this // 为当前对象添加一个函数fn, 值为要已经定义的要调用的函数
    console.log('ctx.fn = ', ctx.fn)
    // 执行添加的函数fn
    var result = ctx.fn(...args)
    // 执行完以后删除
    delete ctx.fn
    return result
}
getValue.myCall(a,'test', 20)
```

### 手动实现 apply 方法

```
// apply
Function.prototype.myApply = function(funcCtx) {
    console.log(this)
    if(typeof this != 'function') {
        throw new TypeError('Erorr')
    }
    let ctx = funcCtx || global

    ctx.fn = this
    console.log('arguemnets = ', arguments)
    let result
    if(arguments[1]) {
        result = ctx.fn(...arguments[1])
    } else {
        result = ctx.fn()
    }
    delete ctx.fn
    return result
}
getValue.myApply(a, ['eo', 50])
```

## JavaScript 中的 prototype

prototype 属性使您有能力向对象添加属性和方法
prototype 代表了该函数的原型，还表示了一个类的属性或方法的集合
当用 new 来生成一个对象时，prototype 对象的属性或方法将会成为实例化的对象的属性或方法

### 使用场景：

我们把所有方法都放在一个函数内部，每一次通过 new 一个对象的时候，新创建的对象都会对类的 this 上的属性进行复制，所以这些新创建的对象都会有自己的一套方法，这样做对内存消耗很大，我们可以通过原型的方式去处理

## 字符串和数字相加

var str1 = '2' + 2 + 2
var str2 = 2 + 2 + '2'
console.log(typeof str1, str1); // string 222
console.log(typeof str2, str2); // string 42

## 事件冒泡，事件捕获

冒泡从目标对象开始，向父级元素至 window 传递；捕获从 window 底层逐级至目标对象传递

1. 捕获阶段：先由文档的根节点 document 往事件触发对象，从外向内捕获事件对象
2. 目标阶段：到达目标事件位置（事发地），触发事件
3. 冒泡阶段：再从目标事件位置往文档的根节点方向回溯，从内向外冒泡事件对象

## js 事件机制执行顺序

默认：1. 捕获 2. 目标 3. 冒泡

- 当 addEventListener 第三个参数为 true（即默认值），为默认执行顺序，即

1. 捕获
2. 目标
3. 冒泡

- 当 addEventListener 第三个参数为 false，为逆过程，即

1. 冒泡
2. 目标
3. 捕获

## EventLoop
