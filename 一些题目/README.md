## Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。
Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

## ES6 代码转成 ES5 代码的实现思路是什么

使用 babel 转译

1. 解析：把 es6 代码 转换成 AST 语法树
2. 然后按照一定规则将 es6 AST 转换成 es5 AST
3. 再将 es5 AST 转换成 es5 代码

## 为什么字母占一个字节，汉字占两个字节

ASCII 码的问题，存字母需要 8 位空间，汉字太多，需要 16 位空间

## 函数的柯里化

柯里化是指把接受多个参数的函数转换成多个只接受单一参数的函数

## 进程和线程的区别？

一个进程可以有多个线程
进程是资源分配的基本单位、线程是资源调度的基本单位

## 并行和并发的区别

并行和并发都是高效完成多任务的解决方案

1. 并行：多个进程同时可以运行，互不影响（一个老师同时辅导多个学生）
2. 并发：多个进程同时发生，但需要在这多个进程里面相互切换（一个老师在辅导 A 学生，A 学生在想问题的时候，老师同时辅导 B 同学）

## Promise.all 是并发还是并行？

并行（同时执行多个异步请求）

## 内存泄漏

内存泄漏指浏览器不能正常回收内存的现象

## 浏览器的垃圾回收机制

垃圾收集器必须跟踪哪个变量没被引用，对于不再有用的变量打上标记，以备将来收回其占用的内存

## 浏览器识别无用变量的两个方法

1. 引用计数法
2. 标记清除法

## 优雅降级和渐进增强

1. 优雅降级
   优雅降级是指一开始就构建相对完善的网站，然后慢慢兼容低版本的浏览器（向后兼容）
2. 渐进增强
   渐进增强是指在基本功能得到满足的条件下，对支持新特性的浏览器使用新特性（向前兼容）

## Vue 路由原理，如何去实现一个路由插件

挂载虚拟 DOM

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

## 什么是 RESTful API？

1. RESTful URL 中只能有名称不能有动词，操作的表达是使用 HTTP 的动词，GET、POST、PUT、DELETE
2. 将 API 版本号放入 URL（如果有需要的话）
3. 尽量将 API 部署在专用域名下

## AMD/CMD 规范

JavaScript 没有模块化，浏览器引入模块取决于 script 标签的引入顺序

为了提高开发效率，从而引入了模块化开发的概念，也就有了 CMD（commonJS）和 AMD（requireJS）

nodejs 是根据 commonjs 规范而创作的项目，CMD 规范中的模块加载方式是同步的，所以 CMD 规范只适用于服务器端，不适用于浏览器端（服务器端 require 加载速度取决于硬盘读取速度，浏览器端 require 读取速度取决于网速）

所以后来就有了 AMD（requireJS），而 requireJS 是一个库，使用的时候需要引入

## 事件冒泡，事件捕获

冒泡从目标对象开始，向父级元素至 window 传递；捕获从 window 底层逐级至目标对象传递

1. 捕获阶段：先由文档的根节点 document 往事件触发对象，从外向内捕获事件对象
2. 目标阶段：到达目标事件位置（事发地），触发事件
3. 冒泡阶段：再从目标事件位置往文档的根节点方向回溯，从内向外冒泡事件对象

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
