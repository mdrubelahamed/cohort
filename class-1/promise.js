const fs = require("fs");

function helloReadFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt", "utf-8", (err, data) => {
            resolve(data);
        });
        reject("Error:", err);
    });
}

helloReadFile().then(function (data) {
    console.log("Hello");
    console.log(data);
});

