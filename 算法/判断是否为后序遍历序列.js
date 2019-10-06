let arr = [4, 8, 6, 12, 16, 14, 10]

function VerifySquenceOfBST(sequence) {
  let len = sequence.length
  if (len == 0) return false
  let count = 0
  while (len--) {
    while (sequence[count++] < sequence[len]);
    while (sequence[count++] > sequence[len]);
    if (count < len) return false
    return true
  }
}

VerifySquenceOfBST(arr)