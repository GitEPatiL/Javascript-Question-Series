// ==========================================
// Problem: Check if a number is Prime
// ==========================================
// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

let n = 4; // The number to check
let isPrime = true; // Assume it is prime initially

// Step 1: Handle edge cases (numbers less than or equal to 1 are not prime)
if (n <= 1) {
    isPrime = false;
} else {
    // Step 2: Loop from 2 up to the square root of n
    // We only need to check up to sqrt(n) because if n = a * b, one factor must be <= sqrt(n)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Step 3: Check divisibility
        if (n % i === 0) {
            isPrime = false; // Found a divisor, so it's not prime
            break; // Exit the loop immediately, no need to check further
        }
    }
}

// Step 4: Output the result
if (isPrime) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);
}