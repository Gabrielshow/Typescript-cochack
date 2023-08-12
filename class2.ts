class Animal {
name: string;
constructor( thename: string) { this.name = thename;}
move(distanceinmeters: number = 0){ console.log(`${this.name} moved ${distanceinmeters} m.`);
}
}

class snake extends Animal {
constructor(name : string) {
super(name);
}
move(distanceinmeters = 5){
console.log("slitering...");
super.move(distanceinmeters);}
}

class horse extends Animal {
constructor (name: string) {
super(name);}
move(distanceinmeters = 45){
console.log("Galloping...");
super.move(distanceinmeters);
}
}

let sam = new snake("sammy the python");
let tom : Animal = new horse("Tommy the Palomino");
sam.move();
tom.move(34);
tom.move(); //default value of 45 will be shown
