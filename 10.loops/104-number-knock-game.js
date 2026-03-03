// Question: Create a 'Number Knock' game (ask the user to keep guessing the number until the user enters correct number)
const prompt = require('prompt-sync')();
// Write your solution below:


let number = parseInt(prompt("Enter the Number"));
let correctNum = 25
console.log(number)
for(let i=1;i<=1;i++){
    if(number===correctNum){
        console.log(`You Entered coorect num, You win`);
        
    }else{
        console.log("Wrong guess ,Try Again")
    }
}

