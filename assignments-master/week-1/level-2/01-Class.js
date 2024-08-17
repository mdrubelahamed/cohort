class Animal {
    constructor(name, legCount) {
        this.name = name;
        this.legCount = legCount;
    }
    static description() {
        console.log(
            `This is a Animal class, which has two constructor name, legcount and a func 'describe'.`
        );
    }
    describe() {
        return `${this.name} has ${this.legCount} legs`;
    }
}

const dog = new Animal("Dog", 4);
const tiger = new Animal("Tiger", 4);
console.log(tiger.describe());
