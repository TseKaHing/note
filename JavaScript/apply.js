Function.prototype.myApply = function (funCtx) {
  if (typeof this != 'function') {
    throw new TypeError('error')
  }
  let ctx = funCtx || window
  ctx.fn = this
  let args = arguments[1]
  let result = args ? ctx.fn(...args) : ctx.fn()
  delete ctx.fn
  return result
}