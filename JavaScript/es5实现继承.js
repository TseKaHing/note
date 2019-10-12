function Super(name) {
  this.name = name
  this.eat = function () {
    return this.name
  }
}

function Child(name) {
  Super.apply(this, arguments)
  this.sleep = function () {
    return this.name
  }
}

var father = new Super('Jack')
Child.prototype = father
var child1 = new Child('Amy')

console.log(father.eat(), child1.sleep());   // Jack Amy

