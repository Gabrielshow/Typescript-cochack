//optional properties
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

let mysquare = createsquare ( {color : " black" }); 
console.log(mysquare.color);

let mysquare2 = createsquare ( {color: "Gold", width: 43} );
console.log(mysquare2.area);
