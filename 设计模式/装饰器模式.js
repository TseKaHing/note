// 装饰器模式就是为一个类添加额外的功能
// 我们通过装饰器对XMind进行改造，XMind公司面积变大了
let XMind = function () {
  this.area = 50
  this.count_of_staff = 100
  this.getArea = function () {
    return this.area
  }
  this.getCount = function () {
    return this.count_of_staff
  }
}
function Decorator(Company) {
  let instance = new Company()
  instance.area += 10
  return instance
}
let res = Decorator(XMind)
console.log(res.getArea());  // 输出60，原来面积是50，装修后变成60