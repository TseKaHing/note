/**
 * 题目描述：输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
 * 如果有多对数字的和等于S，输出两个数的乘积最小的。
 * 
 * 输出描述：对应每个测试案例，输出两个数，小的先输出。
 */


let arr = [1, 2, 3, 4, 5, 6, 7, 8]

function FindNumbersWithSum(array, sum) {
  // write code here
  let low = 0, high = array.length - 1
  while (low < high) {
    if (array[low] + array[high] > sum) {
      high--
    } else if (array[low] + array[high] < sum) {
      low++
    } else {
      return [array[low], array[high]]
    }
  }
  return []
}


FindNumbersWithSum(arr, 9)