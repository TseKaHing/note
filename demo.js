// class P {
//   constructor() {
//     this.age = 10
//   }
// }

// P.age = 10
// class P2 extends P { }
// P2.prototype.age = 20
// let mm = new P2
// console.log(mm, P2, P);
// console.log(mm.age);
// console.log(P2.age);
// console.log(P.age);

// var a
// if (a) {
//   let a = 20
// } else {
//   let a = 30
// }
// console.log(a);

// var a = 1
var obj = {
  a: 10,
  fn: () => {
    console.log(this.a);
  }
}

obj.fn()