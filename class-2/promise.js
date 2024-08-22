setTimeout(() => {
    console.log("hi there");
    setTimeout(() => {
        console.log("inside second timeout ");
    }, 2000);
}, 1000);

function myOwnFunc() {
    setTimeout(() => {
        console.log("hello world");
        n;
    }, 1000);
}

// myOwnFunc();

// my own promise class
class PromiseOfMyOwn {
    constructor(resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
    }
    describe() {
        return `This is my own promise which has ${this.resolve} and ${this.reject}`;
    }
}
