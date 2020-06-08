class Vue {
  constructor(options) {
    this.data = options.data
    this.observer(this.data)
  }
  observer(obj) {
    Object.keys(val).forEach(key => {
      this.defineReactive(obj, key, obj[key])
    })
  }
  defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        if (val == newVal) {
          rerturn
        }
        console.log('updated', newVal);
        return newVal
      }
    })
  }
}

let obj = new Vue({
  data: {
    msg: '你好帅啊！'
  }
})

obj.data.msg = '本来就帅啊！'
