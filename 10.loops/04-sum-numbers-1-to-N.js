// Q4: Sum numbers 1 to N; implement sum(n) using a loop.

// Write your solution below:
function sum(n) {
    // Your code here
 let totalSum =0;
    for(let i=1;i<=n;i++){    
        totalSum+=i;

    }
    return totalSum;
}

let result = sum(5)
console.log(result)

