//classes
class Greeter {
greetings: string;
constructor(message: string){this.greetings = message;}
greet(){return "Hello " + this.greetings;}
}

let greeter = new Greeter("World!");
let result = greeter;
console.log(result.greet());

