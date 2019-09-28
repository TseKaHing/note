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
