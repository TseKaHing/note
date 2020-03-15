var arr = [1, 2, [3, 4]]
arr = arr.toString().split(',').map(item => Number(item))
console.log(arr);
