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
    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});

// Game functions
function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to Blackjack! Let's begin!!!";
    }
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