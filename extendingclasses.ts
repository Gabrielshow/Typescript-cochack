//extending classes
class control { private state : any;}

interface selectcontrol extends control {
select(): void;}

class button extends control implements selectcontrol {
select(){
console.log("button")};}

class textbox extends control { select(){
console.log("textbox")};}

/* class imagecontrol implements selectcontrol {private state : any
select(){
console.log("imagecontrol");}} //to fix somehow imagecontrol
//incorrectly implements selectcontrol */

let sc = new button;
sc.select();

let tb = new textbox;
tb.select();

/* let ic = new imagecontrol; 
ic.select(); */




