// Question: Calculate the sum of numbers from m to n

// Write your solution below:
var result = function sumMtoN(m, n) {
    // Your code here
    let sum = 0;
    for(let i = m;i<=n;i++){
        sum = sum + i;
    }
    return sum;
}

console.log(result(3,7)); //25


