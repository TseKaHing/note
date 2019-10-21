## async & await

async 用于声明一个 function 是异步的
await 用于等待一个异步方法执行完毕

Promise 通过 then 来解决地狱回调，而 async 的存在是为了进一步优化 promise 的 then 链

async 基于 Promise，所以使用 async 修饰的方法返回一个 Promise 对象

async 修饰的方法，如果没有与 await 配合使用，那么这个方法跟普通方法没什么区别，只是返回的是 Promise 对象

那么配合 await 会有什么不一样呢

await 只能放到 async 方法里面
// 2s 之后返回双倍的值

```
function doubleAfter2seconds(num) {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(2 \* num)
}, 2000);
})
}

async function testResult() {
let result = await doubleAfter2seconds(30);
console.log(result);
}

testResult()
```
