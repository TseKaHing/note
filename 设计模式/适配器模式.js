// 适配器模式作用是让两个兼容两个类
// XMind和Tecent是两个互不关联的两个类，两个公司可以通过合作的关系进行两个公司之间的适配
let XMind = {
  getName() {
    return 'XMind'
  }
}
let Tecent = {
  getName() {
    return 'Tecent'
  }
}
function Adapter(CompanyA, CompanyB) {
  return {
    cooperate() { // 覆盖
      return CompanyA.getName() + '与' + CompanyB.getName() + '达成深度合作'
    }
  }
}
res = Adapter(XMind, Tecent).cooperate()
console.log(res);  // 输出 XMind与Tecent达成深度合作