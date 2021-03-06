## 如果需要手动写动画，你认为最小时间间隔是多久？

多频显示器默认频率是 60Hz，即 1s 刷新 60 次，所以理论上是 1/60s，16.7ms

## 介绍使用过的预处理器？为什么要用预处理器？预处理器有什么用？

less 预处理器，预处理器主要为 css 增加一些编程特性，例如函数调用，嵌套,支持混入
浏览器只能识别 css，不能识别 less，浏览器先把 less 转换成 css

## 除了 px 以外，你还知道哪些表示 css 长度的单位，简单介绍一下？

rpx、rem、vw，vh（小程序）
`rpx` 是微信小程序解决自适应屏幕宽度的尺寸单位，微信小程序规定屏幕宽度为 750rpx
在 iphone6 中，1rpx=0.5px
`rem`，微信小程序也支持 rem 单位，规定屏幕宽度为 20rem，则 1rem = 750rpx/20 = 37.5rpx
`rem` 是 CSS3 新增的相对长度单位，是指相对于根元素 html 的 font-size 计算值的大小，避开层级关系，移动端新型浏览器对其支持较好
`em` 也是相对长度单位，em 是相对于其父元素的 font-size，页面层级越深，em 换算越复杂，麻烦
`vw`,`vh` 是根据浏览器窗口大小调整宽度和高度，1vw=可视窗口的 1%宽度，1vh=可视窗口的 1%高度

## 置换元素、非置换元素

置换元素是浏览器根据元素的标签和属性，来决定元素的具体显示内容
<img>、<input>、<textarea>、<select>、<object> 都是置换元素

## 重绘、回流

回流必定触发重绘

### 重绘

当 render tree 中的一些元素需要更新属性，而这些元素只是改变元素额外观、风格，而不影响布局，不如，background-color

### 回流

当 render tree 的一部分（或全部）因为元素的规模尺寸、布局，隐藏等改变而需要重新构建

## position 取值

1. absolute
   生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
   元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
2. fixed
   生成绝对定位的元素，相对于浏览器窗口进行定位。
   元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
3. static
   默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）
4. inherit
   规定应该从父元素继承 position 属性的值
5. relative
   生成相对定位的元素，相对于其正常位置进行定位
   因此，"left:20" 会向元素的 left 位置添加 20 像素

6. sticky 可以理解成 relative 和 fixed 的结合，主要用于对 scroll 事件的监听
   简单来说，在滑动过程中，某个元素距离其父元素的距离达到 sticky 定位的要求时（比如：top：100px）这时的效果相当于 fixed 定位，固定到适当位置

## 垂直居中布局

1. flex 布局 设置父元素 display: flex; 子元素设置 justify-content: center;(水平居中) align-items:center;(垂直居中)
2. position: absolute; top: 50%; left: 50%; margin-left: 盒子宽度/2; margin-top: 盒子高度/2;
3. position: absolute; margin: 0 auto; top: 50%; margin-top: 盒子高度/2；

## css 盒模型， box-sizing

css 盒模型 ，主要分为 W3C 标准盒模型，以及 IE 标准盒模型
css 主要组成部分，content、padding、border，margin
box-sizing 取值

- content-box -- 表示为 W3C 标准盒模型，width = content
- border-box -- 表示为 IE 标准盒模型，width = content + padding + border
