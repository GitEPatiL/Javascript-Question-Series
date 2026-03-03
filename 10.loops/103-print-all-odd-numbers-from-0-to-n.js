// Question: Print all odd numbers from 0 to n

// Write your solution below:
function printOddNumbers(n) {
    // Your code here
    for(let i=0;i<=n;i++){
        if(i%2 !=0){
            console.log(i)
        }
    }

    
}

var result = printOddNumbers(100);
console.log(result)

