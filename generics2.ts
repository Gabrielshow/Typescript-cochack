function identity<T>(arg: T):T{ return arg;}

let myidentity:<T>(arg:T) => T = identity;

//or using it as a call signature of an object literal
function identity2<T>(arg: T):T { return arg;}

let myidentity2 : { <T>(arg: T):T } = identity2;