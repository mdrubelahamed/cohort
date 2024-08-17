// different types of loops

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     sum += i;
// }
// console.log(sum);

function fruitPrint() {
    const fruits = ["Apple", "Orange", "Peach", "Cherry", "Strawberry"];

    for (let index = 0; index < fruits.length; index++) {
        const element = fruits[index];
        console.log(element);
    }
}
// fruitPrint();

function countTenToOne() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}
// countTenToOne();

function loopForEach() {
    let fruits = ["apple", "banana", "cherry"];
    fruits.forEach(function (fruit, index) {
        console.log(index + ": " + fruit);
    });
}
// loopForEach();

function loopForIn() {
    const object = { a: 1, b: 2, c: 3 };

    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}
// loopForIn();
