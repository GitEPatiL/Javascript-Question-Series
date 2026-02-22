// ==========================================
// Problem: Check if a year is a leap year
// ==========================================

// A year is a leap year if:
// 1. It is divisible by 4 AND not divisible by 100
// OR
// 2. It is divisible by 400

// Method 1: Standard Logic (If-Else)
function isLeapYearStandard(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Method 2: Optimized Logic (One-liner)
const isLeapYearOptimized = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Method 3: Using Date Object
// Check if Feb 29 exists in the given year.
// new Date(year, monthIndex, day) -> Month is 0-indexed (1 is Feb).
function isLeapYearDateMethod(year) {
    const date = new Date(year, 1, 29);
    return date.getMonth() === 1; // If month is still Feb (1), it's a leap year
}

// --- Testing ---
const yearToCheck = 2024;

console.log(`Checking year: ${yearToCheck}`);
console.log("Method 1 (Standard):", isLeapYearStandard(yearToCheck));
console.log("Method 2 (Optimized):", isLeapYearOptimized(yearToCheck));
console.log("Method 3 (Date Object):", isLeapYearDateMethod(yearToCheck));

console.log("\n--- Additional Test Cases ---");
console.log("2000 (Century Leap):", isLeapYearOptimized(2000)); // true
console.log("2100 (Century Not Leap):", isLeapYearOptimized(2100)); // false
console.log("2023 (Not Leap):", isLeapYearOptimized(2023)); // false
console.log("2024 (Leap):", isLeapYearOptimized(2024)); // true