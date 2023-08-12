//class generics
class genericnumber<T>{
zerovalue: T;
add : (x : T, y :T) => T;}

let mygenericnumber = new genericnumber<number>();
mygenericnumber.zerovalue = 0;
mygenericnumber.add = function(x,y){ return x + y;};

