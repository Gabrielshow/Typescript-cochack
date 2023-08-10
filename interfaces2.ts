//interfaces and classes continued
interface clockinterface {
tick() : void; }


interface clockconstructor {
new (hour: number, minute: number) : clockinterface;}

function createclock( ctor : clockconstructor, hour: number, minute: number) : clockinterface{
return new ctor(hour, minute);}

class digitalclock implements clockinterface { constructor (h: number, m: number) {}
tick(){console.log("beep beep");}}

class analogclock implements clockinterface {
constructor (h: number , m: number){}
tick() {
console.log( " tick tick");}}

let digital = createclock(digitalclock, 12, 17);
let analog = createclock(analogclock, 7, 32);
digital.tick();
analog.tick();

//ALL these above can also be achieved using class expressions
interface clockconstructor1 {
new ( hour: number , minute: number) : clockinterface1;
}

interface clockinterface1 {
tick(): void;
}

const clock1: clockconstructor1 = class clock implements  clockinterface1  {
constructor (h: number, m: number) {}
tick() { console.log("beep beep");}}

let clock = new clock1 (12,17);
clock.tick()
