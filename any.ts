//any type
//to opt out of type checking we use the any type.it is a powerful way to work with 
//existing javascript, allowing you to gradually opt-in and out of type checking during
// compilation
// it allows you to access arbitrary values, even one's that don't exist. typescript will not check their 
// existence or type

let looselytyped1 : any = 4;
//looselytyped1.Exist(); //to fix this 
looselytyped1.toFixed();
console.log(looselytyped1);

let strictlytyped : unknown = 4;
//strictlytyped.toFixed();  //you can't convert type unknown to number this will throw an error

let looselytyped2 : any = {};
let d = looselytyped2