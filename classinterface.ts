class point {
x: number;
y: number;
constructor(x: number, y: number){
this.x = x;
this.y = y}
}

interface point3d extends point { z : number; }
let point3d : point3d = { x: 1, y : 2 ,z: 3};
// a simple example of using classes as an interface
//Property 'y' has no initializer and is not definitely assigned in the constructor