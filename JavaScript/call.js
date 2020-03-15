Function.prototype.myCall = function (funCtx) {
  if (typeof this != 'function') {
    throw new TypeError('error')
  }
  let ctx = funCtx || window
  let args = [...arguments].slice(1)
  ctx.fn = this
  let result = ctx.fn(...args)
  delete ctx.fn
  return result
}