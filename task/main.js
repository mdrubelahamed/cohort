/*
## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

function counter() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    console.log(`${hour}:${minute}:${second}`);
    setTimeout(counter, 1000);
}

// setInterval(counter, 1000);

// ** without using setInterval
// counter();

// ** Read a file, remove all the extra spaces and write it back to the same file.
function removeExtraSpacesFromFile() {
    const fs = require("fs");

    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("ERROR:", err);
            return;
        } else {
            data = data.replace(/\s+/g, " "); //
            console.log(data);
        }
    });
}
// removeExtraSpacesFromFile();

/*
1. Regular Expression: /\s+/g
** /: This denotes the start and end of a regular expression pattern in JavaScript.

** \s: This is a shorthand character class in regular expressions that matches any whitespace character. This includes spaces, tabs, newlines, and other types of whitespace.

** +: This quantifier means "one or more" of the preceding element. In this case, it matches one or more whitespace characters.

** /g: This is a flag that stands for "global". It tells the regular expression engine to find all matches in the string, not just the first one.
*/

/*
can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM:SS (Eg. 13:45:23)

 - HH:MM:SS AM/PM (Eg 01:45:23 PM)

 */

function localCounter() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let timeFomat = hour < 12 ? "AM" : "PM";

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    hour = hour > 12 ? hour - 12 : hour;

    console.log(`${hour}:${minute}:${second} ${timeFomat}`);
    setTimeout(localCounter, 1000);
}

// localCounter();

/*

Write a function called fetchData that returns a promise. The promise should:

Resolve with the value "Hello, World!" after a delay of 1 second (1000 milliseconds).
Reject with an error message "Failed to fetch data" if the delay is greater than 1 second.

*/

function fetchData() {
    return new Promise((resolve, reject) => {
        const delay = 1000;
        setTimeout(() => {
            if (delay > 1000) {
                reject("Failed to fetch data.");
            } else {
                resolve("Hello World.");
            }
        }, delay);
    });
}
// fetchData()
//     .then((result) => console.log(result))
//     .catch((err) => console.error(err));
