// 通过 toString 打印可以判断是否为数组

function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}