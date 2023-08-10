//Read only properties
//properties modifiable only when an object is first created.

interface point {
readonly x : number;
readonly y : number;
}

let p: point = {x : 10,  y : 20};
//x & y cannot be changed

console.log(p.x);