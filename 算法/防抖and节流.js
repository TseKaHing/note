// 防抖和节流的目的：抑制高频执行js代码，减少支援浪费

// 防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时

function TikTok(fn, delay) {
  var timer
  return function () {
    var _this = this
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(_this, args)
    }, delay)
  }
}

// 节流：每隔一段时间，执行一次函数

function saveFlow(fn, delay) {
  var timer
  return function () {
    var _this = this
    var args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(function () {
      fn.apply(_this, args)
      timer = null
    }, delay)

  }
}

// 注意：以上代码相似，可以理解成
// 1.防抖就是每次执行都会返回一个新的定时器，下一次执行的时候timer仍然存在，该函数会手动清空该timer定时器
// 2.节流就是每次执行timer之后，都会手动清空timer，相当于下一次执行的时候timer为null