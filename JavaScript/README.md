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
