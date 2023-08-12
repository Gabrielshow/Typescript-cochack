//class types
interface clockinterface {
currenttime : Date;
}

class clock1 implements clockinterface{
currenttime : Date = new Date();
constructor( h: number, m: number) {}
}

interface clockinterface1 {
currenttime: Date;
settime( d: Date) : void;
}

class clock2 implements clockinterface1 {
currenttime : Date = new Date();
settime(d : Date) {
this.currenttime = d;
}
constructor (h: number , m: number){}
}

//when a class inplemnet s an interface, only the instance side of the class is checked
//since the consructor sits in the static side, it is not included in this check.