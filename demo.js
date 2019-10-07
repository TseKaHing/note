function FindNumsAppearOnce(array) {
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  let list = []
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(i) == array.lastIndexOf(i)) {
      console.log(array.indexOf(i), array.lastIndexOf(i));
      list.push(array[i])
    }
  }
  console.log(list);
  if (list.length == 2) {
    console.log(list);
    return list
  }

}


let arr = [1, 2, 2, 3, 3, 4]
FindNumsAppearOnce(arr)