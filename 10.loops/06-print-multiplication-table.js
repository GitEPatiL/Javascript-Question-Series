// Q6: Print the multiplication table for a given integer x (1*x to 10*x).

// Write your solution below:
let table = (x) => {
  // Your code here
  for (let i = 1; i <= 10; i++) {
    let table = x * i;
    console.log(table);
  }
  return;
};
console.log(table(3))
