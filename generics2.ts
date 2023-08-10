function identity<T>(arg: T):T{ return arg;}

let myidentity:<T>(arg:T) => T = identity;

function identity2<T>(arg: T):T { return arg;}

let myidentity2 : { <T>(arg: T):T } = identity2;