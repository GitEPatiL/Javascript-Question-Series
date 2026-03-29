// Q8: Reverse a string using a for loop (without using built-in reverse)

// Function to reverse a string
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Test Case
const input = "aviraj";
const output = reverseString(input);

console.log("Input:", input);
console.log("Reversed Output:", output);