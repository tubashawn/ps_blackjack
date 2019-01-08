let cards = [];
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

function createCards() {
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= 13; j++) {
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


// DOM variables
let textArea = document.getElementById("text-area"),
    newGameButton = document.getElementById("new-game-button"),
    hitButton = document.getElementById("hit-button"),
    stayButton = document.getElementById("stay-button");
    
    // Game variables
    let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

    hitButton.style.display = "none";
    stayButton.style.display = "none";
showStatus();

newGameButton.addEventListener("click", function() {
    textArea.innerText = "It's only a game ;)";
    
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    
    deck = cards;
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];
    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});

hitButton.addEventListener("click", function() {
    console.log("You hit me!");
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();

});

stayButton.addEventListener("click", function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

// Game functions
function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to Blackjack! Let's begin!!!";
    }

    let dealerCardString = "";
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + "\n";
    }
    
    let playerCardString = "";
    for (let i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + "\n";
    }
    
    updateScores();

    textArea.innerText = "Dealer has:\n" +
        dealerCardString + 
        "(score: " + dealerScore + ")\n\n" +
        
        "Player has:\n" +
        playerCardString + 
        "(score: " + playerScore + ")\n\n";

        if (gameOver) {
            if(playerWon) {
                textArea.innerText += "YOU WIN!!!";
            } else {
                textArea.innerText += "Dealer wins :("
            }
            newGameButton.style.display = "inline";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        }

}

function checkForEndOfGame() {
    updateScores();
    if (gameOver) {
        while(dealerScore < playerScore
                && playerScore <= 21
                && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }
    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    } else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    } else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
        } else {
            playerWon = false;
        }
    }
}

function getCardNumericValue(card) {
    switch(card.value) {
        case "Ace": return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        case 5: return 5;
        case 6: return 6;
        case 7: return 7;
        case 8: return 8;
        case 9: return 9;
        default: return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === "Ace") {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}
function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let temp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = temp;
    }
}

function getNextCard() {
    return cards.shift();
}

function getCardString(card) {
    return card.value + " of " + card.suit;
} 

// TODO: 5 cards for dealer = dealer wins,, tie meassage, blackjack win meassage
// TODO: convert to react app