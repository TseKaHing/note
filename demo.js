var a = 0;
for (var i = 0; i < 3; i++) {
  for (var j = 3; j > i; j--) {
    a = a + i + j;
  }
}
console.log(a);