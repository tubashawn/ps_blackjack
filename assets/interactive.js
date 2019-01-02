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
            let card = {
                suit: suits[i],
                value: j
            };

            switch (j) {
                case 1: card.value = "Ace"; break;
                case 11: card.value = "Jack"; break;
                case 12: card.value = "Queen"; break;
                case 13: card.value = "King"; break;
                default: card.value = j; 
            }

            cards.push(card);
        }
    }
}

createCards();

function getNextCard() {
    return cards.shift();
}


// let playerCards = [getNextCard(), getNextCard()];
console.log(cards);
console.log(playerCards);