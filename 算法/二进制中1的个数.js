// 在计算机中，数字不管是正数还是负数，都以补码的方式存储，

function NumberOf1(n) {
  let count = 0
  while (n) {
    n = n & n - 1   //   n 与n-1相与相当于原来n中二进制的1的个数-1
    count++
  }
  return count
}

