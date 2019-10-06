function Add(num1, num2) {
  let sum = 0
  let carry = 0

  while (num2 != 0) {      // 当carry位为0退出循环
    sum = num1 ^ num2      // num1和num2异或相加，但此时并没有考虑进位的情况
    carry = (num1 & num2) << 1   //  左移1位，表示进位
    num1 = sum
    num2 = carry
  }
  return num1
}