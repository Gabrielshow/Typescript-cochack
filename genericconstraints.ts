//generic constraints
function loggindidentity2<T extends lengthwise> (arg:T):T{console.log(arg.length);
return arg;}

interface lengthwise { length: number; }

// function getproperty <T, K extends key of T> ( obj:T, key: K){ return obj[key];}

// let x = {a:1, b:2, c:3, d: 4};
// getproperty(x, "a");
// getproperty(x,"m");
//to fix error cannot find the name key