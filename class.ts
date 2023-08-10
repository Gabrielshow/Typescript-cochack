//classes and interfaces continued
class Animal { move (distanceinmeters: number = 0){
console.log(`Animal moved ${distanceinmeters} m.`);
}}

class Dog extends Animal { bark() {console.log("woof! woof! ");
}
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();