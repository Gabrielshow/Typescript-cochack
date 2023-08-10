//Readonly array
let a : number[] = [1,3,4];
let ro : ReadonlyArray<number> = a;

//performing these operations result in an error
//ro[0] = 12, ro.push(17), ro.length = 100, a = ro 

//to reverse back to array we use type assertion
let a1 :number[] = [1,2,3,4];
let ro1: ReadonlyArray<number> = a1;
a1 = ro1 as number[];
a1.push(5);
console.log(a1);

//variables use const
// while properties use readonly

