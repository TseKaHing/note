// 工厂模式属于创建型设计模式，用户不必知道创建内部细节，只需要知道怎么创建和使用就可以
// 简单工厂实例：由一个工厂对象决定创建创建某一种产品对象类的实例，主要用来创建同一类对象
let Factory = function (prop) {
  switch (prop) {
    case 'XMind': return new XMind()
    case 'Tencent': return new Tencent()
    default: return
  }
}
let XMind = function () {
  this.name = 'XMind'
  this.area = '深圳'
}
let Tencent = function () {
  this.name = 'Tencent'
  this.area = '深圳'
}
let instance = new Factory('XMind')
console.log(instance);  // 输出XMind { name: 'XMind', area: '深圳' }