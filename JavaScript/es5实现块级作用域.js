/*
JavaScript只有两种作用域，全局作用域和块级作用域
ES6有了块级作用域；在ES5时，采用立即执行函数实现块级作用域
*/

/*
立即执行函数的目的：
不必为函数命名，避免了污染全局变量
IIFE内部形成了单独的作用域，可以封住一些外部无法读取的私有变量
*/

// demo1

{
  let a = "abc";
};
console.log(a);

// ReferenceError: a is not defined

(function () {
  let a = "abc";
})()

console.log(a);

// ReferenceError: a is not defined

/* demo2
使用立即执行函数模仿实现let的块级作用域
*/

for (let i = 0; i < 5; i++) {

}
console.log(i);

// ReferenceError: i is not defined

(function () {
  for (var i = 0; i < 5; i++) {

  }
})()
console.log(i);

// ReferenceError: i is not defined