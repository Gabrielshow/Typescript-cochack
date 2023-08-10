//type void
//the absenve of having any type at all.
//it is the return type of functions that do not return a value

function warnUser(): void {
	console.log("This is my waring message");
	}
	
warnUser();

let unusable: void = undefined;
console.log(unusable);
//unusable = null;  //this will throw an error type null is not assignable to void