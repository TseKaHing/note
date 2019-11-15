## css 选择器优先级

！important > 行内样式(style 属性) > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符(\*)

## display 和 position 的取值。

display 的取值有：table/inline/block/inline-block（当时就说了这些，还有经常用到的 none，table-cell 这些一紧张忘记说了）；
position 的取值有：fixed/relative/absolute（static 忘记说了）。

## link 和@import 的异同

相同点：都可以引入 css 样式
推荐使用 link，慎用@import
link 是 html 标签
使用@import 可能会导致资源文件下载顺序混乱和 http 请求过多

加载页面时，link 标签引入的 css 被同时加载，@import 引入的 css 将在页面加载完毕后被加载

## 盒模型

从里到外：内容(content)+内边距(padding)+边框(border)+外边距(margin)

标准模型的宽高是指 content 的宽高
IE 盒模型的宽高是指 content+padding+border 的宽高

## BFC

### 什么是 BFC?

BFC(Block formatting context)块级格式化上下文,它是一个独立的渲染区域，只有 Block-level box 参与，他规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干

BFC 作用：

1. 利用 BFC 避免外边距折叠
2. 清楚内部浮动（撑开高度）
3. 原理：触发父 div 的 BFC 属性，使下面的子 div 都处在
