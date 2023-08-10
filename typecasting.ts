//Type assertion or Type casting
let somevalue : unknown = "this is a string";
console.log(somevalue);

let strlength: number = (somevalue as string).length;
console.log(strlength);

//this can be done using angle bracket
let somevalue1 : unknown = "This is a string";
console.log(somevalue1);

let strlength1 : number = (<string> somevalue1).length;
console.log(strlength1);

//the two samples are equivalent; using one over the other is a preference of choice
//as -style is allowed only for JSON
