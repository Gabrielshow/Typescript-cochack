//rest parameters or spread operator in other language

function buildname(firstname : string, ...restofname : string []){
return firstname + " " + restofname.join("");}

let employeename = buildname("joseph", "samuel", "lucas", "mack-ziz");

//this could be also be done like this
let buildname2 : (fname : string, ...rest: string[]) => string = (fname : string, ...rest : string []){
return fname + " " + rest.join("");}

let employeename1 = buildname2("joseph", "samuel", "lucas", "mack-ziz");
console.log(employeename);
console.log(employeename1);
