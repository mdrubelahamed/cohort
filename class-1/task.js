let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
    99, 100,
];

// Wap to print all even no of an array
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        // console.log(arr[i]);
    }
}

// wap to print the biggest number of an array
let biggestNumber = null;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
    }
}
// console.log(biggestNumber);

// ** reverse an array
let reverseArr = [];
for (i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
// console.log(reverseArr);

// ** wap that prints all the male peoples first name from a given complex object
const people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Smith", gender: "female" },
    { firstName: "Mike", lastName: "Johnson", gender: "male" },
    { firstName: "Emily", lastName: "Davis", gender: "female" },
    { firstName: "Chris", lastName: "Brown", gender: "male" },
];

for (const element of people) {
    if (element["gender"] === "male") {
        // console.log(element["firstName"]);
    }
}

// ** create a counter in js (count 30 to 0)
// let count = 30;
// const intervalId = setInterval(() => {
//     if (count >= 0) {
//         console.log(count);
//         count--;
//     } else {
//         clearInterval(intervalId);
//     }
// }, 100);

// ** Calculate the time it takes between  a setTimeout call and the inner function actually running
// const startTime = Date.now();
// const timeoutDuration = 5 * 1000; // 5 seconds

// const timeout = setTimeout(function () {
//     console.log("Hello world");
// }, timeoutDuration);

// setInterval(function () {
//     console.log("Time left: " + getTimeLeft(startTime, timeoutDuration) + " s");
// }, 1000);

// function getTimeLeft(startTime, timeoutDuration) {
//     const elapsedTime = Date.now() - startTime;
//     const timeLeft = (timeoutDuration - elapsedTime) / 1000;
//     return Math.ceil(timeLeft);
// }

// ** Create a terminal clock
function terminalClock() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    minute = checktime(minute);
    seconds = checktime(seconds);

    console.log(`${hour}:${minute}:${seconds}`);
}

function checktime(time) {
    return time < 10 ? "0" + time : time;
}

setInterval(() => {
    terminalClock();
}, 1 * 1000);
