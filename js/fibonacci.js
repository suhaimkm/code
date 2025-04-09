fibonacci = [0,1]

let n = 5;
for (i = 2; i <= n; i++){
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}

console.log(`array elements are : ${fibonacci}`);
