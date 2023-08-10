//interfaces: indexable types or indexes in other languages
interface stringarray {
[index: number]: string;}

let myarray : stringarray; 
myarray = ["bob", "frelda"];

let mystr: string = myarray[0];
console.log(mystr);

interface animal {
name : string;
}

interface Dog extends animal {
breed: string;
}

interface numberdictionary {
[index: string ]: number;
length : number; 
}

//using unions 

interface numberorstringdictionary {
[index : string] : number | string;
length: number;
name: string;
}

//you can make index signatures readonly in order ot prevent assignment to their indices:
interface readonlystringarray {
readonly [index : number] : string;
}

let myarray2 : readonlystringarray = ["Alice", "Bob"];
console.log(myarray2[0]);

function createdog(dog : Dog) : Dog {
let newdog = {name: "earl", breed : "Shiba"};
	if (dog.breed) {
		newdog.breed = dog.breed; }
	if (dog.name){
		newdog.name = dog.name; }
	return newdog; }

let mydog = createdog({name: "skippy", breed: "rottweiler"});
console.log(mydog.name);