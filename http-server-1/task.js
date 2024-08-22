const express = require("express");
const app = express();

// Variables to keep track of total time and request count
let totalTime = 0;
let requestCount = 0;

// Middleware to measure time taken
function logTimeTaken(task) {
    return (req, res, next) => {
        const start = Date.now();

        // Execute the task
        task(req, res);

        const end = Date.now();
        const timeTaken = end - start;

        // Update total time and request count
        totalTime += timeTaken;
        requestCount++;

        // Calculate average time
        const averageTime = totalTime / requestCount;

        // Attach the time metrics to the response object
        res.locals.timeTaken = timeTaken;
        res.locals.averageTime = averageTime;

        next();
    };
}

// Task function for each route
function task1(req, res) {
    // Simulate some task that takes time (this is just an example)
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        sum += i;
    }
    // Store the result in the response object if needed
    res.locals.result = sum;
}

function task2(req, res) {
    // Simulate another task
    let product = 1;
    for (let i = 1; i <= 10000; i++) {
        product += i;
    }
    res.locals.result = product;
}

function task3(req, res) {
    // Simulate yet another task
    let count = 0;
    for (let i = 0; i < 5000; i++) {
        if (i % 2 === 0) count++;
    }
    res.locals.result = count;
}

// Request handler for route 1
app.get("/route1", logTimeTaken(task1), (req, res) => {
    res.status(200).json({
        msg: "Request handled by route 1.",
        timeTaken: res.locals.timeTaken,
        averageTime: res.locals.averageTime,
        result: res.locals.result,
    });
});

// Request handler for route 2
app.get("/route2", logTimeTaken(task2), (req, res) => {
    res.status(200).json({
        msg: "Request handled by route 2.",
        timeTaken: res.locals.timeTaken,
        averageTime: res.locals.averageTime,
        result: res.locals.result,
    });
});

// Request handler for route 3
app.get("/route3", logTimeTaken(task3), (req, res) => {
    res.status(200).json({
        msg: "Request handled by route 3.",
        timeTaken: res.locals.timeTaken,
        averageTime: res.locals.averageTime,
        result: res.locals.result,
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

// const express = require("express");
// const app = express();

// // 2. Find the average time your server is taking to handle requests ?

// app.get("/", (req, res) => {
//     const start = Date.now();
//     for (let i = 0; i < 1000; i++) {
//         console.log(i);
//     }
//     const end = Date.now();
//     const takeTime = end - start;

//     res.status(200).json({
//         msg: "Sever is running ok.",
//         time: takeTime,
//     });
// });

// app.listen(3000);
