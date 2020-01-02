// 通过 toString 打印可以判断是否为数组

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

// 通过Array内置方法isArray()判断是否为数组，该方法 返回一个布尔值

Array.isArray(obj)

// 通过instanceof判断是否为数组，但是instanceof在跨frame对象构建的场景下会失败或者说是在多iframe/window环境下，通过instanceof来识别对象是否为数组会出错
obj instanceof Array