// Question: Create a program to find the factorial of n

// Write your solution below:
let output = function factorial(n) {
    let result = 1;
    for(let i =1; i<=n;i++){
        result*=i; // result = result + i --  1*1=1 1*2=2 2*3=6 6*4=24 24*5=120
    }
    return result;
}
console.log(output(5))

