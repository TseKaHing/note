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

## 进程之间通信

1. 消息队列
2. 共享内存
3. 管道
4. 信号量
5. 套接字

## 线程之间通信

1. 锁机制
2. 信号量机制

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

## 什么是 RESTful API？

1. RESTful URL 中只能有名称不能有动词，操作的表达是使用 HTTP 的动词，GET、POST、PUT、DELETE
2. 将 API 版本号放入 URL（如果有需要的话）
3. 尽量将 API 部署在专用域名下

## AMD/CMD 规范

JavaScript 没有模块化，浏览器引入模块取决于 script 标签的引入顺序

为了提高开发效率，从而引入了模块化开发的概念，也就有了 CMD（commonJS）和 AMD（requireJS）

nodejs 是根据 commonjs 规范而创作的项目，CMD 规范中的模块加载方式是同步的，所以 CMD 规范只适用于服务器端，不适用于浏览器端（服务器端 require 加载速度取决于硬盘读取速度，浏览器端 require 读取速度取决于网速）

所以后来就有了 AMD（requireJS），而 requireJS 是一个库，使用的时候需要引入

## 为什么需要前后端分离？

1. 知识背景，技术栈不同，难以互相理解
2. 前后端是一个依赖的关系，前端需要依赖后端的数据接口

我认为理想的前后端分离方式是
职能上，后端提供纯粹的接口，只需要提供数据-系统的数据或者根据二方库获取数据返回前端，剩下的逻辑前端做。
时间上，前后端可以并行开发，就像下面这张图一样。

## 什么是 RESTful API？

rest 指的是一组架构约束条件和原则，提供了一个新的架构设计思路，满足这些约束条件和原则的应用程序或设计就是 RESTful
接口名称用名词表示，操作用请求方法表示
GET - 查看
POST - 创建
PUT - 编辑
DELETE - 删除

## 为什么选择 iview 而不用 element

无可否认 element 生态更好吧
个人更喜欢 iview 的风格，偏小清新风格，api 比较简洁
在生成类似表格、下拉框这些较复杂的组件时 ， iview 的方式类似于 antdesign , 好处是直接传数据进去，在内部实现了模板生成，高效 快捷。 而 element 则是用到到 v-for vue 指令结合的方式去生成，批量生成元素
表格 操作列 自定义渲染的时 ，iview 使用的是 vue 的 render 函数， element 直接在 template 中插入对应模板

### element 的 bug

1. 表格不能显示 bool 值的 BUG

这是 elementUI 的 bug，单元格什么都不显示。官方说是不推荐直接显示布尔值，说是没什么意义。那么只能格式化了，但是如果你不想转换成什么“YES/NO”,"通过/未通过”，而是直接打印 ture/false 的话。那就是把 bool 值转成字符串返回就可以了。就是利用前面的 formatter。return String(cellValue)

2. 数据绑定带来的问题

对一行数据进行编辑，一般是把这一行数据获取到，然后复制给对话框绑定字段，然后在对话框内修改保存。但是，可能出现这种情况，即操作人修改了内容，但是没有保存而是取消了。由于对象的赋值是引用赋值，修改的就是这一行的绑定数据。这就带来问题了，即我明明没有保存，怎么表格那行数据却变了，这会给用户带来困惑。有一种方法是把这行的每个字段逐个复制给对话框绑定对象，这样比较麻烦，另一种就是深度拷贝，简单的做法就是 JSON.parse(JSON.stringify(xxx))。这样解析出来的就是一个全新的对象

## HTML5 新的特性 标签、API

## Promise try catch 捕获的是哪些类型的异常

## 立即执行函数（IIFE）

立即执行函数本身没有 this，其 this 指向全局作用域 window

## Event Loop（浏览器事件循环机制）

## 转换成 hello world

var str = "Hellllo world";
str = str.replace(/(l)\1/g, '\$1');
Hello world

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

src 加载内部资源，href 用于加载外部资源
历史遗留以及设计原因

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
