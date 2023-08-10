//interface function types
interface searchfunction {
(source: string, substring : string) : boolean; 
}

let mysearch1: searchfunction;
mysearch1 = function(source: string, substring:string) {
let result = source.search(substring);
return result > -1;
};

//another approach
let mysearch2: searchfunction;
mysearch2 = function(src: string, sub:string) : boolean {
let result = src.search(sub);
return result > -1;
};

let mysearch3 : searchfunction;
mysearch3 = function (src, sub) {
let result = src.search(sub);
return result > -1;
};

let mysearch4 : searchfunction;
mysearch4 = function(src, sub) {
let result = src.search(sub);
return true; //this was changed to true  
//the previous version will terminate with an error string is not assignable to boolean
};

let word: string = "Genius";
let toFind : string = "Gen";

console.log(mysearch1(word, toFind));
console.log(mysearch2(word, toFind));
console.log(mysearch3(word, toFind));
console.log(mysearch4(word, toFind));