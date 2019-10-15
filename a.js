var a = 1;
var obj = {
  a: 10,
  fn: () => {
    console.log(this);
  }
}
obj.fn()
console.log(this, global);
console.log(this === global);