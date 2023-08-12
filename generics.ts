//generics
function identity1(arg: number): number{return arg;}

function identity2(arg: any) : any{return arg;}
function identity3<T>(arg: T): T { return arg;}

let output1 = identity3<string>("my string");
console.log(output1);

let output2 = identity3("my string");
console.log(output2);

function loggingidentity<T>(arg: T[]): T[] {
console.log(arg.length);
return arg;
}

function loggingidentity2<T>(arg: Array<T>): Array<T>{
console.log(arg.length);
return arg;}

