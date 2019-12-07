/*
浅拷贝和深拷贝
浅拷贝是地址引用
深拷贝是值引用
浅拷贝只赋值对象的第一层属性，深拷贝可以对对象的属性进行递归复制
*/

// Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性

// 实现深拷贝

// 第一种方式
JSON.parse(JSON.stringfy(obj))

// 第二种方式
function deepCopy(obj1) {
  var obj2 = Array.isArray(obj1) ? [] : {};
  if (obj1 && typeof obj1 === "object") {
    for (var i in obj1) {
      if (obj1.hasOwnProperty(i)) {
        // 如果子属性为引用数据类型，递归复制
        if (obj1[i] && typeof obj1[i] === "object") {
          obj2[i] = deepCopy(obj1[i]);
        } else {
          // 如果是基本数据类型，只是简单的复制
          obj2[i] = obj1[i];
        }
      }
    }
  }
  return obj2;
}
var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj2 = deepCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
alert(obj1.a); // 1
alert(obj2.a); // 3
alert(obj1.c.d); // 3
alert(obj2.c.d); // 4
