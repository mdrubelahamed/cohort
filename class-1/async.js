const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

console.log("hi there");

let a = 0;
for (let i = 0; i < 100000000; i++) {
    a++;
}

console.log("hi there2");