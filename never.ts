//type never
//type of values that never occur.
//it is the return type for a function expression or an arrow function expression
//that throws an exveption or one that never returns

function error(message: string) : never {
throw new Error(message);}

function fail(){
return error("something failed");}

error("Not Authorized");
fail();


//funciton returning never must not have a reachable end point i.e. no loops
