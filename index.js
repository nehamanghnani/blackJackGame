//BLACK JACK GAME
// cards are between 2 - 11
//Ace card - 11
let player = {
  playername: "Neha",
  chips: 140,
  sayHello: function () {
    console.log("Hello! " + this.playername);
  },
};

let firstCard;
let secondCard;
let cards = []; //cards array
let sum = 0;
let message = "";
let isAlive = false;
let isBlackJack = false;
let messageElement = document.getElementById("message-el");
// let sumElement = document.getElementById("sum-el");
let sumElement = document.querySelector("#sum-el");
let cardElement = document.getElementById("cards-el");
let playerElement = document.getElementById("player");

playerElement.textContent = player.playername + " : $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else return randomNumber;
}

function calculateCardSum() {
  sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
}

function startGame() {
  if (!isAlive) {
    message = "";
    sum = 0;
    cards = [];
    messageElement.textContent = "Want to play a round?";
    sumElement.textContent = "Sum: ";
    cardElement.textContent = "Cards: ";
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    calculateCardSum();
    renderGame();
  }
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Woohoo! You've got a BlackJack!";
    isBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageElement.textContent = message;
  sumElement.textContent = "Sum: " + sum;
  cardElement.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardElement.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive && !isBlackJack) {
    console.log("Draw new card");
    thirdCard = getRandomCard();
    cards.push(thirdCard);
    calculateCardSum();
    renderGame();
  }
}

//OBJECTS
// let person = {
//     name ="Neha",
//     age =22,
//     gender = "Female "
// }

// let course = {
//     title : "Learn CSS Grid for free",
//     lessons : 16,
//     creator : "Neha Manghnani",
//     length:63,
//     length:2,
//     isFree: true,
//     tags: ["html","css"]
// }

let hands = ["rock", "paper", "scissor"];

getHands();
function getHands() {
  let hand = Math.floor(Math.random() * 3);
  console.log(hands[hand]);
}
