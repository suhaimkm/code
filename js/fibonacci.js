let fibonacci = [];

let n = 6;
for (i = 0; i <= n; i++) {
  if (i == 0) fibonacci.push(0);
  else if (i == 1) fibonacci.push(1);
  else fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}

console.log(`array elements are : ${fibonacci}`);
