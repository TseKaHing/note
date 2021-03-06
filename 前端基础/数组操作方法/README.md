对于一个数组
我们通过以下方式去创建和初始化一个数组

```
// 第一种方式
let arr = new Array()
// 第二种方式
let arr = new Array(7)
// 第三种方式
let arr = new Array(1, 2, 3, 4, 5, 6, 7)
```

当然，这些并不是最简便的方式
或许你见过如下这样去初始化一个数组

```
let arr = [ ]
```

这种方式等价于

```
let arr = new Array()
```

它其实是`JavaScript`的语法糖，简化了这些繁琐的操作

##在数组末尾插入(任意数量的)元素
用法：`arr.push()`

##在数组开头插入(任意数量的)元素
用法：`arr.unshift()`

##在数组末尾删除(任意数量的)元素
用法：`arr.pop()`

##在数组开头删除(任意数量的)元素
用法：`arr.shift()`

##在任意位置添加或删除元素
用法：`arr.splice(index, quantity, item1, item2, ...item n)`
API 说明：
`index`(必选)：数组对应的下标
`quantity`(必选)：删除元素的个数
`item1, item2, ...item n`(可选)：插入的自定义元素

特别说明：
（1）当`quantity`为`0`或者是`<0`的数，表示不删除元素
（2）一旦使用`item1, item2, ...item n`这些参数，必定会在指定`index`位置插入这些元素

```
// 删除元素
示例1：
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.splice(1, 3)
console.log(arr);  =>   [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

`示例 2：

```
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.splice(1, 0)
console.log(arr);  =>  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

示例 3：

```
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.splice(1, -3)
console.log(arr);  =>  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

示例 4：

```
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.splice(1, 0, 'a', 'b', 'c' )
console.log(arr);  =>  [0, "a", "b", "c", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

示例 5：

```
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.splice(1, -3, 'a', 'b', 'c' )
console.log(arr);  =>  [0, "a", "b", "c", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

示例 6：

```
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.splice(1, 3, 'a', 'b', 'c')
console.log(arr);  =>  [0, "a", "b", "c", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

##截取数组内元素
用法：`arr.slice(start, end)`
API 说明：
`start`(必选)：`start`为开始截取的下标号
`end`(可选)：`end`为结束截取的下标号
特别说明：
（1）如果`end`未被规定，即没有选上`end`参数，从`start`开始截取到数组结尾的所有元素。
（2）下标号为`-1`代表数组最后一个元素，`-2`代表数组倒数第二个元素
（3）返回一个从`[start, end)`的新数组

```
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let newArr = arr.slice(12, -8)
console.log(newArr);
// arr.slice(12, -8)等价于arr.slice(12, 8) [12, 8)为空集，所以newArr输出为[ ]
```

##创建 n 维数组
这里以`3`维数组为例

```
// 创建3维数组
let arr = []
for (let i = 0; i < 3; i++) {
  arr[i] = []
  for (let j = 0; j < 3; j++) {
    arr[i][j] = []
    for (let z = 0; z < 3; z++) {
      arr[i][j][z] = i + j + z
    }
  }
}
// 遍历输出数组的每一个元素
for (let a = 0; a < arr.length; a++) {
  for (let b = 0; b < arr[a].length; b++) {
    for (let c = 0; c < arr[a][b].length; c++) {
      console.log(arr[a][b][c]);
    }
  }
}
```

##拼接数组(两个或多个数组)
用法：`arr1.concat(arr2)` or `arr1.concat(arr2, arr3, ...arr n)`
说明：`arr1.concat(arr2)`表示在`arr1`数组尾部拼接上`arr2`，以此类推

```
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [5, 6]
console.log(arr1.concat(arr2));  =>  [1, 2, 3, 4]
console.log(arr1.concat(arr2, arr3));  =>  [1, 2, 3, 4, 5, 6]
```

##数组迭代
（1）`every` 对数组中的每个元素运行给定函数，如果该函数对每个元素都返回`true`，则返回`true`
（2）`some` 对数组中的每个元素运行给定函数，如果任意元素返回`true`，则返回`true`
（3）`forEach` 对数组中的每个元素运行给定函数，该方法没有返回值
（4）`map` 对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组
（5）`filter` 对数组中的每个元素运行给定函数，返回该函数会返回`true`的元素组成的数组

说明：
（1）`every`和`some`是两个相对的方法， `every`是数组内所有元素均返回`true`才返回`true`，`some`是数组内有一个元素返回`true`就返回`true`
（2）`filter`方法不会改变原数组，可以理解成过滤/筛选原数组内的部分元素，这些元素组成新的数组
（3）`map`方法与`filter`方法相似，但最大的区别就是可以对原数组的进行加工

```
let arr1 = [1, 2]
// 使用filter
let newArr1 = arr1.filter(item => {
  console.log(item);  =>  1, 2
  if (item > 1) {
    console.log(item);  =>  2
    // return item +1  // 即使这样写，返回的数组元素的值也不会被修改
    return item
  }
})
console.log(newArr1)  =>  [2]

// 使用map(这样实现其实并不好，因为对于不满足条件的值会置为undefined，这里只是为了演示使用)
let newArr2 = arr1.filter(item => {
  console.log(item);  =>  1, 2
  if (item > 1) {
    console.log(item);  =>  2
    return item + 1
  }
})
console.log(newArr2)  =>  [undefined, 3]

// 使用map(修改后)
let newArr3 = arr1.filter(item => {
  console.log(item);  =>  1, 2
  if (item > 1) {
    console.log(item);  =>  2
    return item + 1
  } else return item - 1
})
console.log(newArr3)  =>  [0, 3]
```

##reduce 迭代方法
用法：

```
arr.reduce((previousValue, currentValue, index, array)  =>  {
  console.log(previousValue, currentValue, index, array);
})
```

API 说明：
`previousValue`(必选)：前驱值
`currentValue`(必选)：当前值
`index`(可选)：当前索引
`array`(可选)：迭代的数组(是一个固定值，如`arr.reduce()`，`array`指代`arr`)

特别说明：
`reduce()`方法可以有很多用途：比如：迭代比较数组中的最大值，求和，数组去重等等

`reduce求数组最大值`

```
var res = [1,2,3,4,5].reduce((pre, cur) => {
    return cur > pre ? cur : pre;
    //return Math.max(pre,cur);
});
```

`reduce数组求和`

```
var res = [0, 1, 2, 3, 4].reduce((pre, cur) => { pre + cur })
```

`reduce数组去重`

```
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur) => {
  if(!pre.includes(cur)){
  return pre.concat(cur)
  } else {
  return pre
  }
},[])
```

##查找数组中的元素
（1）`indexOf()` 返回第一个与给定参数相等的数组元素的索引，没有找到则返回`-1`
（2）`lastIndexOf()`与`indexOf`相对返回最后一个与给定参数相等的数组元素的索引，没有找到返回`-1`
（3）`includes()` 找到返回`true`，否则为`false`
（4）`find()`接收一个回调函数，返回第一个满足条件的值，找不到返回`undefined`
（5）`findIndex()`接收一个回调函数，返回第一个满足条件的值的索引，找不到返回`-1`

##数组转换成字符串
用法：`arr.toString()`

```
let arr =  [1, 2, 3, 4, 5, 6]
console.log(arr.toString())  =>  1,2,3,4,5,6
```

##数组拼接成字符串
用法：`arr.join(separator)`
API 说明：
`separator`(可选)：如果该参数没选上，默认以`","`作为分隔符；选上，则自定义分隔符

与该方法相对的是`split()`方法，他是将字符串分隔成数组
用法：`str.split(separator, quantity)`
API 说明：
`separator`(必选)：字符串或正则表达式
`quantity`(可选)：该参数指定返回的数组的最大长度，且返回的子串不会多于这个参数指定的数组

##颠倒数组中元素的顺序
用法：`arr.reverse()`

```
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.reverse())  =>  [6, 5, 4, 3, 2, 1]
```

##把数组的元素转换成键(下标)值(下标对应的值)对
用法：`arr.entries()`
说明：返回数组中的迭代对象，该对象包含该数组的所有键值对

```
let arr = [1, 2, 3, 4, 5, 6]
//  这里可以看出arr.entries()返回的是数组的一个迭代对象
console.log(arr.entries());  =>  Array Iterator {}
//  既然是迭代对象，我们就需要迭代输出
//  entries()转换成键值对
for (const item of arr.entries()) {
  console.log(item);
  //  [0, 1]
  //  [1, 2]
  //  [2, 3]
  //  [3, 4]
  //  [4, 5]
  //  [5, 6]
}
//  keys()转换成键
for (const item of arr.keys()) {
  console.log(item);
  //  0
  //  1
  //  2
  //  3
  //  4
  //  5
}
for (const item of arr.values()) {
  console.log(item);
  //  1
  //  2
  //  3
  //  4
  //  5
  //  6
}
```

##根据已有数组浅拷贝一个新数组
用法：`Array.from(arr，mapFunction)`
API 说明：
`arr`(必选)：已有的数组，需要被浅拷贝的数组
`mapFunction`(可选)：这里可以传进来一个过滤值的函数
`thisValue`(可选)：映射函数`mapFunction`中的 `this` 对象
说明：`Array.from(arr)`从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例

```
let arr = [1, 2, 3, 4, 5, 6]
let fromArr = Array.from(arr)
console.log(arr, fromArr);  =>  [1, 2, 3, 4, 5, 6]  [1, 2, 3, 4, 5, 6]
arr[2] = 10
console.log(arr, fromArr);  =>  [1, 2, 10, 4, 5, 6]  [1, 2, 10, 4, 5, 6]
//  这样似乎是深拷贝对的，没错，这个假象，这只是对于第一层的数组是深拷贝
//  那如果像如下这样两层数组的呢？
let arr = [1, 2, [7, 8], 4, 5, 6]
let fromArr = Array.from(arr)
console.log(arr, fromArr);  =>  [1, 2, [7, 8], 4, 5, 6]  [1, 2, [7, 8], 4, 5, 6]
arr[2][0] = 10
console.log(arr, fromArr);  =>  [1, 2, [10, 8], 4, 5, 6]  [1, 2, [10, 8], 4, 5, 6]
```

或者有其他用法：

```
console.log(Array.from('foo'));  =>  ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => 2x));  =>  [2, 4, 6]
```

##根据传入的参数创建新数组
用法：`Array.of(params)`

根据自定义参数创建数组

```
let arr = Array.of(1, 2, 3, 4, 5, 6)  //  等价于let arr = [1, 2, 3, 4, 5, 6]
```

根据已有数组创建新数组

```
let arr = [1, 2, 3, 4, 5, 6]
let ofArr = Array.of(...arr)  //  展开运算
console.log(ofArr)  =>  [1, 2, 3, 4, 5, 6]
```

##填充数组
用法：`arr.fill(filledValue, start, end)`
API 说明：
`filledValue`(必选)：要填充的值
`start`(可选)：开始填充的索引位置(开区间)
`end`(可选)：结束填充的索引位置，但不包括该位置(闭区间)；如果没选上该参数，默认结束位置为`arr.length`
特别说明：假如选上了`start`和`end`两个参数，范围为`[start, end)`；假如选上了`start`参数没选上`end`参数，范围为`[start, arr.length]`
我们也可以这样初始化一个数组

```
let initArr = Array(6).fill(1)
console.log(initArr)  =>  [1, 1, 1, 1, 1, 1]
```

对于一个已有数组，我们也可以填充覆盖原来的数组元素

```
let arr = [1, 2, 3, 4, 5, 6]
arr.fill(8, 3, 5)
console.log(arr)  =>  [1, 2, 3, 8, 8, 6]
```

##赋值数组的一系列元素到统一数组的指定位置
用法：`arr.copyWithin(target, start, end)`
API 说明：
`target`(必选)：复制到的目标索引位置
`start`(可选)：开始复制的索引位置(闭区间)
`end`(可选)：结束复制的索引位置，默认为`arr.length`(开区间)
特别说明：假如选上了`start`和`end`两个参数，范围为`[start, end)`；假如选上了`start`参数没选上`end`参数，范围为`[start, arr.length]`

```
let arr = [1, 2, 3, 4, 5, 6]
arr.copyWithin(1, 2, 5)
console.log(arr);  =>  [1, 3, 4, 5, 5, 6]
```

##按字母表排序
用法：`arr.sort(sortby(a, b))`
API 说明：
`sortby`(可选)：自定义排序，这里必须是函数，`a`是两个进行比较的值的后者，`b`是前者，如果`a<b`，则证明`a`排在`b`前面，返回一个`<0`的值；如果`a>b`，则`a`排在`b`后面，返回一个`>0`的值；如果`a=b`，则返回`0`
特别说明：
如果调用该方法没有使用参数，将按字母顺序对数组中的元素进行排序，说的更精确点，是按照`ASCII`码的顺序进行排序

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.sort()
console.log(arr)  =>  [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
```

这样或许并不是我们想要的对吧
这是因为在对数组做排序时，把元素默认成字符串进行相互比较
我们可以进行如下改进，就可以对数字进行排序了

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
arr.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else return 0
})
console.log(arr)  =>  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

上面是对数字进行排序，那如何对字符串进行排序呢
假如有这样一个数组

```
let names = [ 'ThinkBig', 'thinkbig', 'jazzy', 'Jazzy']
console.log(names.sort())  =>  ["Jazzy", "ThinkBig", "jazzy", "thinkbig"]
```

这是因为对于`ASCII`码，`J < T < j < t`然而这也不是我们想要的
我们可以这样写一个比较函数
忽略大小写排序

```
let names = ['ThinkBig', 'thinkbig', 'jazzy', 'Jazzy']
names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1
  }
  return 0
})
console.log(names);  =>  ["jazzy", "Jazzy", "ThinkBig", "thinkbig"]
```

小写排在大写前面

```
let names = ['ThinkBig', 'thinkbig', 'jazzy', 'Jazzy']
names.sort((a, b) => a.localeCompare(b))
console.log(names);  =>  ["jazzy", "Jazzy", "thinkbig", "ThinkBig"]
```

##类型数组
因为`JavaScript`数组不是强类型的，因此它可以存储任意类型的数据，而类型数组则用于存储单一类型的数据
（1）`Int8Array` 8 位二进制补码整数
（2）`Uint8Array` 8 位无符号整数
（3）`Uint8ClampedArray` 8 位无符号整数
（4）`Int16Array` 16 位二进制补码整数
（5）`Uint16Array` 16 位无符号整数
（6）`Int32Array` 32 位二进制补码整数
（7）`Uint32Array` 32 位无符号整数
（8）`Float32Array` 32 位 IEEE 浮点数
（9）`Float64Array` 64 位 IEEE 浮点数

我们可以通过以下语句去初始化这样一个类型数组

```
let arr = new Int8Array(length)
```

`Int8Array`可以根据实际需求替换

`以上内容均为ThinkBig总结，转载须联系本人，侵权必究`
`powered by ThinkBig`
