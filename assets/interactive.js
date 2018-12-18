let cards = [];
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

function createCards() {
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= 13; j++) {
            // if (j == 1) {
            //     cards.push("Ace" + " of " + suits[i]);
            // } else if (j == 11) {
            //     cards.push("Jack" + " of " + suits[i]);
            // } else if(j == 12) {
            //     cards.push("Queen" + " of " + suits[i]);
            // } else if (j == 13) {
            //     cards.push("King" + " of " + suits[i]);
            // } else {
            //     cards.push(j + " of " + suits[i]); 
            // }
            // if statement vs switch statement. same result
            switch (j) {
                case 1: cards.push("A" + " of " + suits[i]); break;
                case 11: cards.push("J" + " of " + suits[i]); break;
                case 12: cards.push("Q" + " of " + suits[i]); break;
                case 13: cards.push("K" + " of " + suits[i]); break;
                default: cards.push(j + " of " + suits[i]); 
            }
        }
    }
}

createCards();
console.log(cards);