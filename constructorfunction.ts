//classes constructor function
class Greeter { greeting: string; 
constructor(message: string){ this.greeting = message;}
greet(){ return " Hello, " + this.greeting; }
}

let greeter1: Greeter;
greeter1 = new Greeter("World!");
console.log(greeter1.greet());

//using constructor function 
let greeter2 = (function() { function Greeter1 (message : string) { 
this.greeting = message; }
Greeter1.prototype.greet = function() { return " Hello " + this.greeting; };
return Greeter1;
})();

let greeter3;
greeter3 = new greeter2("World!");
console.log(greeter3.greet()); 
//there is an issue with the code to fix later