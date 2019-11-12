const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  var str = line
  var o = {}
  for (let i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    if (o[char]) {
      o[char]++
    } else {
      o[char] = 1
    }
  }
  var max = 0
  for (var key in o) {

    if (max < o[key]) {
      max = o[key]
    }
  }

  for (var key in o) {

    if (o[key] == max) {
      console.log(key + ": " + max);
    }
  }

  rl.close()

})
