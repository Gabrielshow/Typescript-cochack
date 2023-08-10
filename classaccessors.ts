//class accessors
const fullnamemaxlength = 20;
class employee { private _fullname: string = " ";
get fullname(): string { return this._fullname;}
set fullname(newname: string){ if (newname && newname.length > fullnamemaxlength){
throw new Error("full name has a max length of " + fullnamemaxlength);}
this._fullname = newname;
}
}

let employee1 = new employee();
employee1.fullname = "Bob Smith";
if (employee1.fullname){
console.log(employee1.fullname)}

