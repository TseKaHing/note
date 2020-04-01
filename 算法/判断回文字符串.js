const str = 'abcba'
function judge(str) {
  const len = str.length
  let half_len = len / 2
  for (let i = 0; i < half_len; i++) {
    if (str[i] != str[len - i - 1]) {
      return false
    }

  }
  return true
}

console.log(judge(str));
