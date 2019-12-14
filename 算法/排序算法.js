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

// 大顶堆 小顶堆
/*
堆排序是指利用堆这种数据结构所设计的一种排序算法。堆是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点

基本步骤：
其实整个排序主要核心就是堆化过程，堆化过程一般是用父节点和他的孩子节点进行比较，取最大的孩子节点和其进行交换；
但是要注意这应该是个逆序的，先排序好子树的顺序，然后再一步步往上，到排序根节点上。
然后又相反（因为根节点也可能是很小的）的，从根节点往子树上排序。最后才能把所有元素排序好
时间复杂度O(nlogn)
稳定性：不稳定
*/


// 桶排序
/*
桶排序是将待排序集中中处于同一个值域的元素存入同一个桶中，也就是根据元素特性拆分成多个区域
则拆分后形成的多个桶，从值域上看是处于有序的，对每个桶中的元素进行排序，则所有桶中的元素构成的集合是已排序的

时间复杂度O(N+N(logN-logM)) M是桶的个数  空间复杂度O(N+M)
稳定性：不稳定
*/


// 基数排序                                      
/*
与桶排序的思想类似，如果桶排序的n很大，再建立一个m容量的数组就不合适了
所以可以用多趟桶排序，桶的大小使m（一般取10），然后对每个数字的每一位（从低位到高位）进行桶排序，最后就达到了结果
时间复杂度为：O(K*(n+m))（K表示需要循环的次数，就是序列中最大数字的位数）
稳定性：稳定
*/

/*
排序和快排的区别

数据结构不同, 堆排是一种树状结构, 时间复杂度都是(nlogn最好)
他们的时间复杂度一样, 为什么平常更多使用快排, 而不是堆排 ?

堆排的时间常量要大于快排, 也就是执行交换操作的性能不同, 在性能上快排的性能略优于堆排, 并且使用场景中快排效率最坏的情况的概率比较小
快排：数组中交换数据，在数据量不是特别大，而且离散程度较高的情况下效率很高
堆排序：创建堆，数据交换，调整堆的时间均很多

所以在实际应用中，我们用快排会更多一点
*/