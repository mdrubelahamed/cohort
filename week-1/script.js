// Task: Write a function that accepts a number and divides 100 by that number. Use a try-catch block to handle any errors (like dividing by zero) and print an error message if an exception occurs.

function test(num) {
    try {
        if (num === 0) throw new Error("Cannot divide by zero.");
        const result = 100 / num;
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

// Testing the function with random numbers
const randomNum1 = Math.floor(Math.random() * 100);
console.log(test(randomNum1));
