## JavaScript 的数据类型

基本数据类型：Number，String，Boolean，Undefined，Null

复杂数据类型：Object，Array，Function，RegExp，Date，Error

全局数据类型：Math

ES6 新增数据类型: Symbol

## 内存泄漏

内存泄漏指浏览器不能正常回收内存的现象

## 浏览器的垃圾回收机制

垃圾收集器必须跟踪哪个变量没被引用，对于不再有用的变量打上标记，以备将来收回其占用的内存

## 浏览器识别无用变量的两个方法

1. 引用计数法
   跟踪记录每个值被引用的次数。当声明一个变量并将引用类型的值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次 数加 1.相反，如果包含对这个值引用的变量又取得另外一个值，则这个值的引用次数减 1.当这个值的引用次数变成 0 时，则说明没有办法访问这个值了，因此就 可以将其占用的内存空间回收回来
2. 标记清除法

## 优雅降级和渐进增强

1. 优雅降级
   优雅降级是指一开始就构建相对完善的网站，然后慢慢兼容低版本的浏览器（向后兼容）
2. 渐进增强
   渐进增强是指在基本功能得到满足的条件下，对支持新特性的浏览器使用新特性（向前兼容）

## 进程和线程的区别

一个进程可以有多个线程
进程是资源分配的基本单位、线程是资源调度的基本单位

## 进程之间通信

1. 消息队列
2. 共享内存
3. 管道
4. 信号量
5. 套接字

## 线程之间通信

1. 锁机制
2. 信号量机制

## 为什么需要前后端分离

- 知识背景，技术栈不同，难以互相理解
- 前后端是一个依赖的关系，前端需要依赖后端的数据接口
- 职能上，后端提供纯粹的接口，只需要提供数据返回前端，剩下的逻辑前端做
- 时间上，前后端可以并行开发

## RESTful API

rest 指的是一组架构约束条件和原则，提供了一个新的架构设计思路，满足这些约束条件和原则的应用程序或设计就是 RESTful
接口名称用名词表示，操作用请求方法表示
GET - 查看
POST - 创建
PUT - 编辑
DELETE - 删除

- RESTful URL 中只能有名称不能有动词，操作的表达是使用 HTTP 的动词，GET、POST、PUT、DELETE
- 将 API 版本号放入 URL（如果有需要的话）
- 尽量将 API 部署在专用域名下

## AMD/CMD 规范

JavaScript 没有模块化，浏览器引入模块取决于 script 标签的引入顺序

为了提高开发效率，从而引入了模块化开发的概念，也就有了 CMD（commonJS）和 AMD（requireJS）

nodejs 是根据 commonjs 规范而创作的项目，CMD 规范中的模块加载方式是同步的，所以 CMD 规范只适用于服务器端，不适用于浏览器端（服务器端 require 加载速度取决于硬盘读取速度，浏览器端 require 读取速度取决于网速）

所以后来就有了 AMD（requireJS），而 requireJS 是一个库，使用的时候需要引入

## 如何改变函数内部 this 指针的指向函数？

bind(一般用作兼容，有些浏览器不兼容 call/apply)、call、apply
假设要改变 fn 内部的 this 指向，指向 obj，fn.call(obj)或者 fn.apply(obj)

## event.currentTarget 与 event.target

event.currentTarget 指向事件所绑定的元素，而 event.target 始终指向事件发生时的元素

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

## js 事件循环

js 是单线程的，他主要利用事件回调的方式进行非阻塞 I/O
js 先执行同步任务，再执行异步任务，同步任务进入主线程，异步任务进入任务队列
主线程只会不断地从任务队列里面取消息，执行消息，当消息队列为空，就会等待任务队列为非空，而且主线程只有在将当前的消息执行完成后，才会读取下一个消息

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
        throw new TypeError('Error')
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

## 立即执行函数（IIFE）

立即执行函数本身没有 this，其 this 指向全局作用域 window

## 转换成 hello world

var str = "Hellllo world";
str = str.replace(/(l)\1/g, '\$1');
Hello world

## ES6 代码转成 ES5 代码的实现思路是什么

使用 babel 转译

1. 解析：把 es6 代码 转换成 AST 语法树
2. 然后按照一定规则将 es6 AST 转换成 es5 AST
3. 再将 es5 AST 转换成 es5 代码

## 为什么字母占一个字节，汉字占两个字节

ASCII 码的问题，存字母需要 8 位空间，汉字太多，需要 16 位空间

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

## 实现虚拟渲染的思路

首先，列表的虚拟渲染依赖于滚动事件
其次，DOM 元素能够滚动的充要条件是 DOM 元素有高度
由于 DOM 元素的创建和渲染需要的时间成本很高，对于大数据的情况下，把这些 DOM 元素都渲染出来不可行
虚拟渲染的解决思路就是只对可视区域进行渲染

局限性：

每一个数据项都必须是等高的

具体步骤如下：

1. componentDidMount 更新一次数据（此时 scrollTop 为 0）
2. 在 tree 最外层的容器绑定一个 ref，为 rctTree，以及监听滚动事件，该容器下包含两个子元素：

- 第一个元素用于获取当前容器所有数据的高度（即 treeNodes 的高度）并撑开父容器，使 scroll 事件生效；
- 第二个元素为遍历的所有子节点，需要在子节点绑定一个 ref，为 treeNodes

3. 每次执行滚动事件，都会重新计算 ref 的 scrollTop
4. scrollTop 更新会重新计算可视区域数据的开始索引以及结束索引（即 startIndex 和 endIndex），然后 treeNodes 会根据 startIndex 在 Y 轴上平移 startIndex \* rowHeight 的高度（使用 transform：translate3d（））

为什么选择 transform：translate3d（），而不是使用 paddingTop/paddingBottom？
paddingTop/paddingBottom 是布局属性，会产生重绘，造成了性能消耗，对布局属性进行动画，浏览器需要为每一帧进行重绘并上传到 GPU 中
transform 属于合成属性，对合成属性进行动画，浏览器会为元素创建一个独立的复合层，当元素内容没有发生改变，该层就不会被重绘，浏览器会通过重新复合来创建动画帧

优化：
因为 scroll 事件的发生很活跃，每次 scroll 事件的发生都会更新数据，导致滚动的时候有时候会出现闪一下的情况（跟 FPS 有关）
使用 requestAnimationFrame API 能够使得滚动事件的跟 CPU 的 FPS 同步，即约等于 16.7ms 才去执行一次数据的更新

## 函数的柯里化

柯里化是指把接受多个参数的函数转换成多个只接受单一参数的函数

## 高阶函数 函数的柯里化 add(2,3,4...)和 add(2)(3)(4)...都输出相同结果的解决方案

```
function sum(...args) {
  if ([...args].length == 1) {
    let sum2 = [...args][0];
    var tmp = function (y) {
      sum2 += y;
      return tmp;
    }
    tmp.valueOf = function () {
      return sum2;
    }
    return tmp;
  }
  else {
    let sum1 = 0;
    for (var i = 0; i < [...args].length; i++) {
      sum1 += [...args][i];
    }
    return sum1
  }
}

console.log(sum()); //outPut1 0
console.log(sum(2, 3, 4));//outPut1 9
console.log(sum(2)(3)(4)(5).valueOf());//outPut1 5//outPut1 9//outPut1 14
```

## css 选择器有哪些，选择器的权重的优先级

- 选择器类型

1.  ID 　　#id
2.  class 　　.class
3.  标签　　 p
4.  通用　　\*
5.  属性　　[type="text"]
6.  伪类　　：hover
7.  伪元素　　::first-line
8.  子选择器、相邻选择器

- 权重计算规则

1.  第一等：代表内联样式，如: style=””，权值为 1000。
2.  第二等：代表 ID 选择器，如：#content，权值为 0100。
3.  第三等：代表类，伪类和属性选择器，如.content，权值为 0010。
4.  第四等：代表类型选择器和伪元素选择器，如 div p，权值为 0001。
5.  通配符、子选择器、相邻选择器等的。如\*、>、+,权值为 0000。
6.  继承的样式没有权值。

- CSS 四种组合方式

1. 后代选择器(以空格分隔)
2. 子元素选择器(以大于号分隔）
3. 相邻兄弟选择器（以加号分隔）
4. 普通兄弟选择器（以破折号分隔）

- CSS 继承
  CSS 继承是指设置上级（父级）的 CSS 样式，上级（父级）及以下的子级（下级）都具有此属性

## js 对象防篡改

Object.freeze() 冻结对象（不能添加、删除和修改）
使用 Object.isFrozen()方法检测对象是否被冻结

## 事件代理（事件委托）

## ## 为什么 js 加载用 src,css 加载用 href

- src 加载内部资源，href 用于加载外部资源
- 历史遗留以及设计原因

## github 授权登录

流程：

1. 通过触发器跳转到 github 授权页面，同时传入 client_id（必须）等参数
2. 用户同意授权之后，返回在 github 上设置的 callback url，并在这个 url 上携带 code
3. 前端获取到 code 之后再传给服务端，服务端通过传入 client_id，code，client_secret（这三个是必须的）参数，获取到 access_token
4. 通过 access_token 访问 github 特定的 url，就可以获取到 github 上的一些个人信息

## Vue 路由守卫

- 1.  导航被触发
- 2.  在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
- 3.  调用全局的前置守卫 beforeEach
- 4.  在重用的组件里调用 beforeRouteUpdate
- 5.  调用路由独享的守卫 beforeEnter
- 6.  解析异步路由组件
- 7.  在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
- 8.  调用全局的解析守卫 beforeResolve
- 9.  导航被确认
- 10. 调用全局的后置守卫 afterEach
- 11. 触发 DOM 更新
- 12. 用创建好的实例调用 beforeRouterEnter 守卫里传给 next 的回调函数

## CDN

CDN（内容分发网络）
描述：CDN 的目的是通过在现有的 Internet 中增加一层新的 CACHE（缓存）层，将网站的内容分发到最接近用户的网络“边缘”的节点，使用户可以就近取得所需的内容，彻底解决网络堵塞，提高用户访问网络的响应速度，是目前大型网站使用的流行的应用方案

特点：

1. 分布式存储
2. 通过智能 DNS 解析或 http 重定向实现内容分发的负载均衡
3. 全局负载均衡管理与内容管理

面试标准
前端技术能力
沟通能力
学习主动性、培养潜力
通用计算机素养（算法、计算机网络等）
个人定位、职业规划

面试流程以及各环节评分占比

1. 开场语（5）
2. 基础前端知识，主要考察原生 js\html\css 等前端知识（50 分）
3. 沟通、理解能力、学习主动性、培养潜力（20 分）
4. 项目，star 法则讲解（15 分）
5. 个人定位，职业规划（10 分）
   各环节内容
   开场
6. 是如何选择前端这个方向的
7. 平时是如何提高自己技术能力
8. 目前对自己的前端技术评估
9. ...(待补充)

技术考察
针对不同级别的人员，选择性的提问

1. 垂直水平居中
2. css 怎么画不规则图形
3. css 选择器的优先级
4. 引用数据类型的深拷贝方式有哪些？
5. null 和 undefined 的区别？
6. 浏览器事件循环机制
7. 前端页面性能优化
8. this、作用域区别
9. es6、es7
10. async\await 实现，或者 Promise 的实现
11. 封装组件：自己封装过什么组件？组件的功能及优化点是什么？
12. 用过哪些第三方库？比如富文本、音视频处理等。
13. webpack 打包机制？如何优化打包后资源的大小？
14. cookie 前后端交互、localStorage、sessionStorage 的区别？
15. http 请求方式有哪些？opions 是什么情况？
16. 跨域、跨域攻击
17. 前端资源清缓存的方式有哪些？
18. H5 移动端适配方式有哪些？
19. vue 路由模式、前端单页面路由跳转实现的原理是什么？
20. 线上故障处理：遇到过的已上线版本故障是什么？如何定位排查？如何快速解决？
21. ...(待完善)

项目相关

1.  成长比较多的项目
2.  项目解决了什么问题
3.  遇到的难点
4.  怎么解决的
5.  学习和总结
6.  ...（待补充）

[一些面试题](https://zhuanlan.zhihu.com/p/48827292)
[前端面试指南](https://zhuanlan.zhihu.com/p/25859524)
