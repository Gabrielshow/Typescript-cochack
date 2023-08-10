//literal types 
function rolldice(): 1 | 2 | 3 | 4 | 5 | 6 {
return ( Math.floor(Math.random() * 6) + 1 ) as 1 | 2 | 3 | 4 | 5 | 6;}

const result = rolldice();
console.log(result);
