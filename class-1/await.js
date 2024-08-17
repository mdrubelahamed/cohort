// Write an async function that simulates a delay (e.g., using setTimeout) and returns a value after 2 seconds. Call this function and log the result

async function getData() {
    setTimeout(() => {
        console.log("hello");
    }, 1000);
}

// getData();

// Create two functions: one that returns a promise that resolves after 1 second and another that rejects after 2 seconds. Use async/await to handle both functions and log the results
// Wrap setTimeout in a promise to use with async/await

function delay(ms, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(new Error("Something went wrong in f2"));
            } else {
                resolve();
            }
        }, ms);
    });
}

async function f1() {
    try {
        await delay(1000); // Wait for 1 second
        console.log("hello1");
    } catch (error) {
        console.log("Error in f1:", error.message);
    }
}

async function f2() {
    try {
        await delay(2000, true); // Wait for 2 seconds and reject
        console.log("hello2");
    } catch (error) {
        console.log("Error in f2:", error.message);
    }
}

// Call the functions
async function run() {
    await f1();
    await f2();
}

// Execute the run function
run();
