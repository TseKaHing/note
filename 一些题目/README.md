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
