//interfaces
//type checking focuses on the shape that values have.
//this is sometimes duck typing. or structural subtyping.
// interfaces fillt he role of naming these types.

function printLabel(labeledobj : { label : string }) {
console.log(labeledobj.label);}

let myobj = { size : 10, label : "size 10 object"};
printLabel(myobj);

//using interface this can be achieved
interface Labeledvalue {
label : string; }

function printLabel1(labeledobj : Labeledvalue) {
console.log(labeledobj.label);}

let myobj1  = { size : 10 , label : "size 10 object"};
printLabel1(myobj1);