//literal types continued
interface mapconfig {
lng: number;
lat: number;
titlesize: 8 | 16 | 32;
}

let setupmap : mapconfig = {lng: -73.935242, lat: 40.7301, titlesize: 32 }

// function assigntitlesize(value : mapconfig) : mapconfig {
// value.titlesize as 8 | 16 | 32;
// return value; } //cannot assign type '18' to type 8 | 16 | 32;
 
// let newsetupmap = assigntitlesize(setupmap);
console.log(setupmap.titlesize);// had to change titlesize to 32
// in order to supply the right value one must create a function that will convert
// titlesize to a multiple of 8 even when a different value of titlesize is given

function converttitlesize( value: mapconfig) : mapconfig {
	let limit1 : number = 15;
	let limit2 : number = 31;
	 if( value.titlesize <= 8 || (value.titlesize > 8 && value.titlesize < limit1)){
	 value.titlesize = 8;}
	 if( value.titlesize >= 16 && value.titlesize < limit2) {
	 value.titlesize = 16;}
	 if( value.titlesize >= 32){
	 value.titlesize = 32;}
	 return value;
	 }
	 //this function will convert mapconfig into the required type 8 | 16 | 32
	 // it doesn't use any algorithm just simple proper functions
let result = converttitlesize(setupmap);
console.log(result.titlesize);
	 
	 
	 
	 