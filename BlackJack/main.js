var total_p = document.getElementById('total_p');
var total_c = document.getElementById('total_c');
let winner = document.getElementById('draw_card');
let cassier = document.getElementById('cassier');
let yourcards = document.getElementById('yourcards');
document.getElementById("stay").addEventListener("click", Stay);

var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAcecount = 0;

var hidden;
var deck;

let canHit = true;
let canStay = true;

window.onload = function() {
    StartGame();
}
function StartGame() {
    BuilldDeck();
    ShuffleDeck();
    BeginGame();
}


function BuilldDeck() {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let types = ['C', 'D', 'H', 'S'];
    deck = [];

    for (var i = 0; i < types.length; i++) {
        for (var j=0; j < values.length; j++) {
            deck.push(values[j]+ '-' + types[i]);

        }
}
console.log(deck);
}

function ShuffleDeck() { 
    for (let i=0; i <deck.length; i++) {
        let j = Math.floor(Math.random() *deck.length); 
        let tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
    }
}


function BeginGame() { 
    hidden = deck.shift();
    dealerSum +=  getValue(hidden);
    dealerAceCount += checkAce(hidden);

    while (dealerSum < 17) {
        let cardImg = document.createElement('img');
        let card = deck.shift();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        cassier.append(cardImg);
    }

    for (var i = 0; i<2; i++) {
        let cardImg = document.createElement('img');
        let card = deck.shift();
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAcecount += checkAce(card);
        yourcards.append(cardImg);
}
    if (reduceAce(yourSum, yourAcecount) == 21) {
        canHit = false;
        canStay = false;
        winner.innerText = "You win!";
        
    }
    total_p.innerText = reduceAce(yourSum, yourAcecount);
}

function Hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement('img');
    let card = deck.shift();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAcecount += checkAce(card);
    yourcards.append(cardImg);
    total_p.innerText = reduceAce(yourSum, yourAcecount);
    if(reduceAce(yourSum, yourAcecount) > 21) {
        winner.innerText = "You lose!"
        canHit = false;
        canStay = false;
    }
}


function Stay() {
    if(canStay) {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAcecount);

    canHit = false;
    total_c.innerText = dealerSum;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    if (yourSum > 21) { 
        winner.innerText = "You lose!"
    }
    else if (dealerSum > 21) {
        winner.innerText = "You win!"
    }
    else if (yourSum == dealerSum) {
        winner.innerText = "Tie!"
    }
    else if (yourSum > dealerSum) { 
        winner.innerText = "You win!"
    }
    else if (yourSum < dealerSum) { 
        winner.innerText = "You lose!"
    }
}
}

function getValue(card) {
    let data = card.split('-');
    let value = data[0];

    if (isNaN(value)) {
        if (value =='A') {
            return 11;
        }
        return 10;
    }
    return parseInt(value);

}

function checkAce(card) {
    if (card[0] == 'A') {
        return 1;
}
    return 0;
}

function reduceAce(sum, ace) {
    if (ace == 2) {
        canHit = false;
        winner.innerText = "You win!";
    } 
    while (sum >21 && ace > 0) {
        sum -= 10;
        ace--;
    }
    return sum;
}