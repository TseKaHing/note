// 单例模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建
// 这个类提供了一种访问访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象

var instance

var foo = function () {
  if (!instance) {
    instance = new singleton()
  }
  return instance
  function singleton() {
    this.name = 'ThinkBig'
    this.method = function () {
      return this.name
    }
  }
}

var a = new foo()
var b = new foo()
console.log(a.method());
console.log(a === b);
