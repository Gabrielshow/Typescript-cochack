//abstract classes
abstract class animal{
abstract makesound(): void;
move(): void {
console.log("roaming the earth...");
}}

//abstract methods share a similar syntax to interface methods. both define the 
//signature of a method without including a method body.
//however abstract method must include the abstract keyword.

abstract class Department {
constructor ( public name: string) {}
printname(): void{
console.log("Department name: " + this.name);
};
abstract printmeeting(): void;
}

class AccountingDepartment extends Department {
constructor (){
super("Accounting and Auditing");
}
printmeeting():void {
console.log("The Accounting department meets each Monday at 10am.");}
generatereports():void {
console.log("Generating Accounting reports...")
}
}

let department : AccountingDepartment;
department = new AccountingDepartment();
department.printname();
department.printmeeting();
department.generatereports();
