//if an object literal has any property that the "target type" doesn't have
//, you'll get an error: getting Bound Excess

//property checks
//type assertion

interface squareconfig {
color? : string;
width? : number;
}

function createsquare (config : squareconfig):{color: string, area: number} {
	let newsquare = { color : "white", area:  100};
	if (config.color) {
		newsquare.color = config.color; }
	if (config.width) {
		newsquare.area = config.width * config.width; }
	return newsquare; }
	
//let mysquare3 = createsquare ({ width : 100, opacity: 0.5}); //this will surely throw an error
// but if instead we use type assertion to convert mysquare3 as squareconfig then it will work

let mysquare4 = createsquare ({ width : 100, opacity: 0.5} as squareconfig);
console.log(mysquare4.area);

//the other way to ensure mysquare3 works is to add another entry to the interface squareconfig
interface squareconfig1 {
color? : string;
width? : number;
[propName:string] : any;
}

function createsquare1 (config : squareconfig1):{color: string,opacity : number, area: number} {
	let newsquare = { color : "white",opacity: 0, area:  100};
	if (config.color) {
		newsquare.color = config.color; }
	if (config.opacity) {
		newsquare.opacity = config.opacity; }
	if (config.width) {
		newsquare.area = config.width * config.width; }
	return newsquare; }

let mysquare3 = createsquare1({ width : 100, opacity: 0.5});
console.log(mysquare3.opacity);

