//extending interfaces 
interface shape { color: string;}
interface square extends shape{ sidelength: number;}
let square1 = {} as square;
square1.color = "blue";
square1.sidelength = 10;

console.log(square1.color);

interface penstroke{
penwidth : number; }

interface pensquare extends shape, penstroke{
sidelength : number;}

let square2 = {} as pensquare;
square2.color = " blue";
square2.sidelength = 10;
square2.penwidth = 5.0;

console.log(square2.penwidth);