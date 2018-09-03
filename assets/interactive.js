var cards = [];

function createCards() {
    for (var i = 1; i <= 13; i++) {
        for (var j = 0; j < 4; j++) {
            if (i == 1) {
                cards.push("A");
            } else if (i == 11) {
                cards.push("J");
            } else if(i == 12) {
                cards.push("Q");
            } else if (i == 13) {
                cards.push("K");
            }
            switch (i) {
                case i == 1:
                    cards.push("A");
                    break;
                case i == 11:
                    cards.push("J");
                    break;
                case i == 12:
                    cards.push("Q");
                    break;
                case i == 13:
                    cards.push("K");
                    break;
                default:
                    cards.push(i);
                    break;
            }
        }
    }
}

createCards();
console.log(cards);