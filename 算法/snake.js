// 腾讯算法题：输入一个数n，输出n*n的蛇形矩阵
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  console.log(snake(line));
})

function snake(num) {
  let arr = [], counter = 1, i = 0, j = 0, layer = 0
  for (let i = 0; i < num; i++) {
    arr[i] = []
    for (let j = 0; j < num; j++) {
      arr[i][j] = 0

    }
  }
  while (counter <= num * num) {
    while (j < num - layer) {
      arr[i][j] = counter;
      j++;
      counter++;
      if (counter > num * num) {
        return arr
      }
    }
    j--
    i++
    while (i < num - layer) {
      arr[i][j] = counter;
      i++
      counter++;
    }
    i--
    j--
    while (j >= layer) {
      arr[i][j] = counter;
      j--
      counter++;
    }
    j++
    i--
    while (i >= layer + 1) {
      arr[i][j] = counter;
      i--
      counter++;
    }
    i++
    j++
    layer++
  }
  return arr
}

// 输入一个m*n（m 不一定等于 n）的矩阵，输出高矩阵的蛇形一维矩阵

function printMatrix(matrix) {
  let m = matrix.length, n = matrix[0].length
  let w = 0, s = m - 1, a = 0, d = n - 1
  let res = []
  if (m == 0 || n == 0) {
    return res
  }
  while (a <= d && w <= s) {
    for (let i = 0; i <= d; i++) {
      res.push(matrix[w][i])
    }
    for (let i = w + 1; i <= s; i++) {
      res.push(matrix[i][d])
    }
    if (w != s) {
      for (let i = d - 1; i >= a; i--) {
        res.push(matrix[s][i])
      }
    }
    if (a != d) {
      for (let i = s - 1; i > w; i--) {
        res.push(matrix[i][a])
      }
    }
    a++
    d--
    w++
    s--
  }
  return res
}