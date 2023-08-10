//functors in typescript
//function add( x, y ){ return x + y;};

//using anonymous function
//let myadd = function(x,y) { return x + y;}; //the functions above will give an error
//of implicit any type for both x & y

//when functions refer to variables outside of the function body.
// they are said to capture these variables.

//the function can also be written as
function add1( x: number, y : number) : number { return x + y;};

let myadd1 : (x : number, y: number) => number = function(x : number, y: number) : number{
return x + y; };

//console.log(add(3,4));
//console.log(myadd(3,4));
console.log(add1(3,4));
console.log(myadd1(3,4));