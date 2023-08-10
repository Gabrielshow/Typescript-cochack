class grid {static origin = {x: 0, y: 0};
calculatedistancefromorigin(point: {x: number, y:number})
{let xdist = point.x -  grid.origin.x;
let ydist = point.y - grid.origin.y;
return Math.sqrt(xdist*xdist + ydist*ydist)/this.scale;}
constructor(public scale: number){}
}

let grid1 = new grid(1.0);
let grid2 = new grid(5.0); //5x scale
console.log(grid1.calculatedistancefromorigin({x:10, y:10}));
console.log(grid2.calculatedistancefromorigin({x:10, y:10}));

