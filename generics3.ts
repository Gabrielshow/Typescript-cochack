interface genericidentity { <T>(arg:T):T;}

function identity3<T>(arg: T): T{return arg;}

let myidentity3 : genericidentity = identity3;

//or better still
//interface genericidentityfunction2<T> {(arg:T):T;}

function identity4<T>(arg: T):T{return arg;}

let myidentity : genericidentityfunction2<number> = identity4