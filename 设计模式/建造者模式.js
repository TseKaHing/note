// 建造者模式相比工程模式更加注重创建过程的细节
// 建造者模式是一种具有很强步骤型额设计模式，比如我们在拆分某些功能模块的时候，经常需要用到建造者模式
// 也可以理解成在Builder类里面就暴露出对象创建逻辑
let Builder = function (name, area) {
  let instance = new Company()
  instance.company_name = Name(name)
  instance.company_area = Area(area)
  return instance
}
let Company = function () {
  this.department = ['技术部', '行政部']
}
let Name = function (name) {
  return name
}
let Area = function (area) {
  return area
}
let instance = new Builder('XMind', '深圳')
console.log(instance);
// 输出 Company { department: ['技术部', '行政部'], company_name: 'XMind', company_area: '深圳' }