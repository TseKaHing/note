let arr = [10, 1, 35, 61, 89, 36, 55]

// 冒泡排序
// 原理：比较两个相邻的元素，将值大的元素交换到右边
// 时间复杂度：O(n^2)
// 稳定性：稳定

function bubbleSort(arr) {
  let temp = 0
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
// bubbleSort(arr)
// console.log(arr);

// 选择排序
// 原理：每次循环都找出最小值，已排序的元素放在左边
// 时间复杂度：O(n^2)
// 稳定性：不稳定

function selectionSort(arr) {
  let min, temp
  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        temp = arr[j];
        arr[j] = min;
        min = temp;
      }
    }
    temp = arr[i];
    arr[i] = min;
    min = temp
  }
  return arr
}

// selectionSort(arr)
// console.log(arr);

// 插入排序
// 原理：假定下标为0的元素已排好序，即对下标为1到arr.length的元素进行排序，第二层循环表示待插入元素依次与左侧元素比较（这个步骤有点像冒泡排序），该步骤目标的找到待插入元素该插入的位置
// 时间复杂度：O(n^2)
// 稳定性：稳定

function insertSort(arr) {
  let temp
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// insertSort(arr)
// console.log(arr);


// 希尔排序（可以理解成插入排序的升级版）
// 原理：分治法思想，把原始数组按一定间隔分隔成多个子数组，然后对各个子数组进行插入排序，随后逐次减少间隔，直到间隔等于1，待整个数组基本有序之后，再对全部元素进行一次插入排序
// 时间复杂度：O(nlogn)
// 稳定性：不稳定

function shellSort(arr) {
  let increment = Math.floor(arr.length / 2)
  let temp
  while (increment >= 1) {
    for (let i = increment; i < arr.length; i++) {
      for (let j = i - increment; j >= 0 && arr[i] < arr[j]; j -= increment) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
    increment = Math.floor(increment / 2)
  }
  return arr
}

// var res = shellSort(arr)
// console.log(res);


// 归并排序
// 原理：分治法思想，把原始数组分隔成多个子数组，每个子数组都是有序的，然后再把有序的子数组合并成一个有序的数组
// 时间复杂度：O(nlogn)
// 稳定性：稳定

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let res = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  return res.concat(left, right)
}

// let sorted = mergeSort(arr)
// console.log(sorted);



// 快速排序
// 原理：选择一个值，以这个值作为标准，较这个值小或者大的放到两个不同的数组，通过递归的方式，最终得出排序好的数组
// 时间复杂度：O(nlogn)
// 稳定性：不稳定

function quickSort(arr) {
  if (arr.length == 0) {
    return []
  }
  let left = []
  let right = []
  let std = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < std) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }

  }
  return quickSort(left).concat(std, quickSort(right))
}

// quickSort(arr)
// console.log(arr);