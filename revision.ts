//tuples
let skill : [string, number];
skill = ['programming', 5];

//optional tuples
let bgcolor, headercolor : [number, number, number, number?]
bgcolor = [0, 255, 255, 0.5];
headercolor = [0, 255, 255];

//arrays
let skills : string[];
skills = [];
skills[0] = " programming"
//or 
// skills.push["programming"];

//string valuees of mixed types
let scores = ['programming', 5, 'software design', 4]

//or better still
let scores1 : (string | number) [];
scores1 = ['programming', 5, 'software design', 4];

//enums
//typescript enum is a javascript object

//any
//used to migrate a js project over to TS

//void
// it is like the opposite of the any types

function log(message : string ): void{ console.log(message);}

//never
//cannot contain value
//you cannot assign any calue to a variable with a new type.
//it is the return type of function thath always throw an error 
function raiseerror(message: string) : never { throw new Error(message);};

//union type
function add( a : any , b: any) {
if (typeof a === 'number' && typeof b === 'number') {return a + b}

if (typeof a === 'string' && typeof b === 'string'){ return a.concat(b);}

throw new Error ('parameters must be numbers or strings');
}

//another approach is 
function add1( a : number | string, b : number | string) {
if (typeof a === 'number' && typeof b === 'number') {return a + b}

if (typeof a === 'string' && typeof b === 'string'){ return a.concat(b);}

throw new Error ('parameters must be numbers or strings');
}

//type aliasing
type chars = string;
let message1 : chars; //same as string

//string literal types
//it allows you to define a type that accepts only one specified string litreral.
let click : 'click';
click = 'click'; //valid
// click = 'dbclick'; //error is thrown

//functions and rest parameters
function fn( ...rest : string[]){};
function gettotal (...numbers: number []): number{ let total : number = 0;
numbers.forEach ((num : number) => total += num );
return total; }

//generic constraints
function merge< U, V> (obj: U, obj2: V) { return { 
...obj, ...obj2};}

let person3 = merge({ name: 'john'}, {age: 25});
console.log(person3);

//we could go a step further to make merge work with only objects use
// function merge1< U extends Object, V extends Object > (obj1 : U, obj2: V) { return { ...obj1, ...obj2};}

// function prop<T, K extends key of T>(obj: T, key: K){ return obj[key]; }

//type assertion
//using angular brackets <>
//using the as keyword

let empcode: any = 111;
let employeecode = <number> empcode;

let empcode1 : any = 111;
let employeecode1 = empcode1 as number;

//declaring arrays
//using square brackets
//using generic  array type
//using array objects

let fruits: string [] = [ 'Apple','Mango','Banana'];

let fruits1: Array<string> = ['Apple', 'orange', 'banana'];

let fruits2: string[] = new Array('Mango', 'Apple', 'Orange');

//tuples continued
//destructuring a tuple;

let a : [number, string] = [ 10, "hello"];
var b, c = a;

//string 
//string objects
// var stringobect = new string("hello");

//for of vs for in loop
//for .. in loop returns a list of indexes in the object
//for .. of loop returns a list of values of the object being iterated

//forEach 
//only works with Array
//no way to break out of the loop

//map
// var map = new Map();

//set
// var set = new set();
//we can use for .. of loop for sets

//decorators
//@sealed   - a sealed class
class person1 { msg : string;
constructor (message: string){
this.msg  = message;}
show() {
return "Hello" + this.msg; }}

//method
// class item {
// itemArr : Array<string>;
// constructor() {this.itemArr = [];}
// @log
	// add(item : string): void {
	// this.itemArr.push(item);}
	// getall():Array<string>{
	// return this.itemArr;}
// }

//accessor decorators
// class Employee {
// private _salary : number;
// private _name : string;

// @configurable(false)
// getsalary(){return this._salary}
// setsalary(salary: any){this._salary += salary;}
// @configurable(true)
// getname(){return `Sir/Madam, ${this._name}`;}
// setname(name: string){this._name = name;}
// }

//property decorators
class company{
readonly name: string = "Cochack";}

let comp = new company();
console.log(comp.name) //cannot change company name because it's read only

//separator decorators
// class Person4{ msg: string;
// constructor(message: string) {
// this.msg = message; }
// @validate
// show(@require name : string){
// return "Hello" + name + ", " + this.msg} }

//date objects
let date: Date = new Date();



	



