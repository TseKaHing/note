// 时间复杂度O(n^2)

function Find(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] == target) {
        return true
      }
    }
  }
  return false
}



// 时间复杂度O(n)

function Find(target, array) {
  let x = 0
  let y = array.length - 1
  while (x <= array.length - 1 && y >= 0) {
    if (target == array[x][y]) {
      return true
    } else if (target > array[x][y]) {
      x++
    } else {
      y--
    }
  }
  return false
}