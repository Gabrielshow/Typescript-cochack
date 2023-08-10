//this and arroe functions in typescript
let deck2 = {
suits : ["hearts", "spades", "clubs", "diamonds"],
cards : Array(52),
createcardpicker : function() {
return () => { let pickedcard = Math.floor(Math.random()* 52);
let pickedsuit = Math.floor(pickedcard / 13);
return { suit: this.suits[pickedsuit],
card : pickedcard % 13 };};
},
};

let cardpicker = deck2.createcardpicker();

let pickedcard2 = cardpicker();

console.log (" card: " + pickedcard2.card + " of " + pickedcard2.suit);

//better still we can write it like this
function f( this: void) {}

interface card { suit: string; 
card: number;}

interface Deck {
suits : string [];
cards: number[];
createcardpicker1(this: Deck): () => card;
}

let deck: Deck = {suits : ["hearts", "spades", "clubs", "diamonds"],
cards: Array(52),
createcardpicker1: function (this: Deck){ return () => {let pickedcard = Math.floor(Math.random() * 52);
let pickedsuit = Math.floor(pickedcard / 13);
return { suit: this.suits[pickedsuit], card: pickedcard % 13 };
};
},
};

let cardpicker2 = deck.createcardpicker1();
let pickedcard = cardpicker2();
console.log(" card: " + pickedcard.card + " of " + pickedcard.suit);
