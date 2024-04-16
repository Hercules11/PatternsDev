class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof!");
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name)
    }

    fly() {
        console.log("Flying!");
    }
}

const superDog1 = new SuperDog("Daisy")

superDog1.bark()
superDog1.fly()