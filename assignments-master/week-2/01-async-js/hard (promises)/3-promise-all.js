/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inside wait 1 set timeout.");
            resolve("success1");
        }, t);
    });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inside wait 2 set timeout.");
            resolve("success2");
        }, t);
    });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inside wait 3 set timeout.");
            resolve("success3");
        }, t);
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([t1, t2, t3]).then((values) => {
        console.log(values);
        const end = Date.now();
        return end - start;
    });
}

calculateTime(wait1(1000), wait2(2000), wait3(3000)).then((totalTime) => {
    console.log(`Total time: ${totalTime} ms`);
});

module.exports = calculateTime;
