//unknown Type
//this variable could be anything hence its type is unknown.
let notsure : unknown;
notsure = "maybe a string instead";
console.log(notsure);
notsure = false;
console.log(notsure);

let maybe : unknown;
maybe = true;
//let aNumber : number = maybe;  //type unknown cannot be assigned to type number
if (maybe === true ) {
let aBoolean : boolean = maybe;
console.log(aBoolean);}
