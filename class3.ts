//ecmascript private fields
class Animal {
#name : string; 
constructor ( theName : string)
{ this.#name = theName;
}
}

// animal = new Animal("cat"); //this will throw an error that animal isn't accessible outside the animal class
// animal.#name; //error
