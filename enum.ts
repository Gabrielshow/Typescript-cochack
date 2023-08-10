//Enums in typescript
enum Color1 {
RED,
GREEN,
BLUE,}
let c1 : Color1 = Color1.GREEN;
console.log(c1);

//by default enum begin numbering their members starting at 0. you can manually
//set the value of one of its members.

enum color2 {
red = 1,
green,
blue,
}
let c2 : color2 = color2.green
console.log(c2);

enum color3 {
red = 1,
green = 2,
blue = 4,
}
let c3: color3 = color3.green;
console.log(c3);

enum color {
red = 1,
green,
blue,
}
let colorName : string = color[2];
console.log(colorName);
