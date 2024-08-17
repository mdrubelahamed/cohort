class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    describe() {
        return `Animal name is ${this.name} and the color is ${this.color}.`
    }
}

class Friend {
    constructor(name, friendshiptTime) {
        this.name = name;
        this.friendshiptTime = friendshiptTime;
    }
    describe() {
        return `Friend name: ${this.name} and We have ${this.friendshiptTime} year of friendshipt.`
    }
}