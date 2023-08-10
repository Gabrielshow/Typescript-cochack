//readonly modifier in typescript
class octopus { readonly name: string; 
readonly numberoflegs: number = 8; 
constructor(theName: string) { this.name = theName;}
}

let did = new octopus("man with the 8 strong legs");
// did.name = "Man with the 3-piece suit";// an error will be given if this run
console.log(did.name);

//an alternative
class octopus1 { 
readonly numberoflegs: number = 8;
constructor( readonly name: string){}
}

let dad = new octopus1("man with the 8 strong legs");
console.log(dad.name);
