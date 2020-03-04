## 为什么 data 是一个 function？不能是一个对象

为什么不能为对象？
因为对象是引用类型，组件可能会被多个实例（多个组件）同时引用，如果 data 是一个对象，将导致多个实例共享一个 data 对象，其中一个组件改变 data 的属性值，其他实例也会受到影响

为什么 data 需为 function？
data 为一个 function，通过 return 返回对象的拷贝，致使每个实例都有自己独立的对象，实例之间可以互不影响地改变 data 属性值

## Vue 生命周期

<!--
1. beforeCreated 生成\$options 选项，并给实例添加生命周期相关属性
2. created 初始化并注入相关操作，从\$options 选项获取数据选项（vm.\$options.data）,给数据添加"观察器"对象及创建
   定义 getter、setter 存储器属性，在实例创建后被调用，该阶段完成 data，methods 等的初始化，但 DOM 还没挂载
3. beforeMounted el 指向的容器初始化，将 HTML 解析生成 AST 结点，再根据 AST 结点动态生成渲染函数，相关 render 函数首次被调用
4. mounted 完成挂载，被新创建的 vm.\$el 替换，执行 render 函数生成虚拟 DOM，创建真实 DOM 替换虚拟 DOM，并挂载到实例，可以操作 DOM，比如事件监听
5. beforeUpdate vm.$data更新后，虚拟DOM重新渲染之前被调用，此时可以修改 vm.$data，并不会触发附加的冲渲染过程
6. updated 虚拟 DOM 重新渲染后调用，若再次修改 vm.\$data，会再次触发 beforeUpdate、updated，进入死循环
7. beforeDestory 实例被销毁前调用，也就是说在这个阶段还是可以调用实例的
8. destoryed 实例被销毁后调用，所以的时间监听已被移除，子实例被销毁 -->

1. beforeCreate 数据、方法初始化之前
2. created 数据，方法被初始化之后，但未挂载 dom
3. beforeMount 挂载 dom 之前调用，首次调用 render 函数生成虚拟 dom
4. mounted dom 挂载完成并成功渲染到页面，可以进行相关 dom 操作
5. beforeUpdate 数据有更新时调用
6. updated 虚拟 dom 以最小代价重新被渲染
7. beforeDestory 实例被销毁前被调用
8. destoryed 组件销毁后调用

## Vue 在哪个生命周期进行数据交互？

mounted，此时 html 已经渲染出来，可以操作 DOM 结点

## Vue 和 React 的异同，分别适用于怎样的应用场景？

同：

1. React 和 Vue 都是基于虚拟 DOM 模型，这两种工具都具有基于组件的结构
2. MVVM 数据驱动视图

异：

1. Vue 比 React 轻量，但相应 React 生态系统更加完善，功能和结构等做得更加完善，React 学习成本更高
2. 对于状态管理工具，Vue 使用的是 Vuex，而 React 使用的是 Flux/Redux
3. React 开发团队更加成熟，Vue 发展速度更快
4. React 适合做跨平台移动开发，主要依赖于 React Native，web 端和移动端通吃
5. React 重度依赖于 JSX 语法，Vue 使用模板 template 搭建应用，相比之下 Vue 可以在模板和渲染函数之间进行弹性选择

### 什么是虚拟 DOM？

虚拟 DOM 可以看作是使用 JavaScript 模拟 DOM 结构的树形结构，这个树结构包含整个 DOM 结构的信息
使用 render 方法渲染的是虚拟 DOM

### 为什么需要虚拟 DOM？

操作 DOM 很耗资源，而操作 js 很高效，所以在操作 DOM 之间多加一层虚拟 DOM，建立虚拟 DOM，

比如说一个操作中有十次更新 DOM 的操作，虚拟 DOM 不会立即操作 DOM，而是将这十次更新的 diff 内容保存到本地一个 JS 对象，最终将这个 JS 对象一次性 attch 到 DOM 树上

使用 document.CreateElement 和 document.CreateTextNode 创建的就是真实结点

旧的虚拟 DOM=>旧的真实 DOM，新的虚拟 DOM 和旧的真实 DOM 做 diff，生成新的真实 DOM

### 实现步骤

1. 将 js 对象模拟成 DOM
2. 把此虚拟 DOM 转成真实 DOM 并插入到页面中
3. 如果有事件发生修改了虚拟 DOM
4. 比较两棵虚拟 DOM 树的差异，得到差异对象
5. 把差异对象应用到真实的 DOM 树上

## 虚拟 DOM 和 diff 算法

## Vue 路由原理，如何去实现一个路由插件

挂载虚拟 DOM

## Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。
Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

## data 和 computed 都可以实现双线数据绑定，那么他们的本质区别是什么？
