/*
  Promise 是同步执行的函数，属于微任务，setTimeout 属于宏任务，Promise 执行的优先级比 setTimeout 高,
  可以理解成 先等 Promise 运行完再将 setTimeout 加入到任务队列，不管 Promise 有多少个回调 then
  Promise 中的 resolve 方法 立即执行 Promise 下的 then 方法，仍然有 then，继续执行 then，直到 没有可回调方法为止，
  如果 resolve 的是一个可回调的函数或者对象，那他将编程编程异步调用，执行完成再执行宏任务 setTimeout
*/

console.log(1)
new Promise((resolve) => {
  resolve();
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(33);
})
setTimeout(() => {
  console.log(4);
}, 0)
console.log(5)

// 1 2 5 3 33 4

console.log(1)
setTimeout(() => {
  console.log(4);
}, 0)
console.log(5)
new Promise((resolve) => {
  resolve();
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(33);
})

// 1 5 2 3 33 4

/*  这里去掉了resolve 不会执行 then 回调  */
console.log(1)
new Promise((resolve) => {
  // resolve();
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(33);
})
setTimeout(() => {
  console.log(4);
}, 0)
console.log(5)


// 1 2 5 4

let thenable = {
  then: function (resolve, reject) {
    console.log('then');
  }
}

console.log(1)
new Promise((resolve) => {
  resolve(thenable);
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(33);
})
setTimeout(() => {
  console.log(4);
}, 0)
console.log(5)

// 1 2 5 then 4