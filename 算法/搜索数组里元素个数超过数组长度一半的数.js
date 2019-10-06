// 思路：
// 阵地攻守战略 第一个数字作为第一个士兵，守阵地，count == 1
// 遇到敌人(不相等的数) ，同归于尽，count--，当遇到count == 0，又以新的值作为守阵地的士兵，继续下去，到最后，
// 到最后还留在阵地的士兵，有可能是主元素（数组中元素个数超过数组长度一半的元素），
// 则 在循环计数一下该元素，验证是否大于数组长度一半

let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]

function MoreThanHalfNum_Solution(numbers) {
  // write code here
  let len = numbers.length
  let temp = numbers[0]
  let count = 1
  for (let i = 1; i < len; i++) {
    if (temp == numbers[i]) {
      count++
    } else {
      count--
      if (count == 0) {
        temp = numbers[i]
        count = 1
      }
    }
  }
  count = 0
  for (let j = 0; j < len; j++) {
    if (temp == numbers[j]) {
      count++
    }
  }
  if (count * 2 > len) {
    return temp
  }
  return 0
}


MoreThanHalfNum_Solution(arr)