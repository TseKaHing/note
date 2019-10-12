console.log(obj === null);   // 最粗暴的方法

// 高端方法 null被认为是空对象的引用
console.log(Object.prototype.toString.call(null) === '[object Null]');