// 顺序搜索
let arr = [10, 1, 35, 61, 89, 36, 55]


function sequenceSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i  // 找到目标索引为i
    }
  }
}

// let res = sequenceSearch(arr, 61)
// console.log(res);


// 二分查找

function binarySearch(arr, element, start, end) {
  let mid = Math.floor(arr.length / 2)
  if (arr[mid] == element) {
    return mid
  } else if (element < arr[mid]) {
    binarySearch(arr, element, start, arr[mid])
  } else if (element > arr[mid]) {
    binarySearch(arr, element, arr[mid], end)
  } else {
    return 'not found'
  }
}
// let res = binarySearch(arr, 61, 0, arr.length)
// console.log(res);