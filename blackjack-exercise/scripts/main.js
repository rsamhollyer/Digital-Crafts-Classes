// window.addEventListener("DOMContentLoaded", function () {
// 	// Execute after page load
// });

let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let dealerHand = document.querySelector("#dealer-hand");
let playerHand = document.querySelector("#player-hand");
let deck = [];

const buildCard = function (rank, suit) {
	return { rank, suit };
};

const buildDeck = function () {
	let ranks = Array.from(Array(14).keys());
	ranks.shift();
	let suits = "hearts,spades,clubs,diamonds".split(",");
	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			deck.push(buildCard(rank, suit));
		});
	});
};

const handleDealClick = function () {
	addCardToHand(dealerHand);
	addCardToHand(dealerHand);
	addCardToHand(playerHand);
	addCardToHand(playerHand);
};

const handleHitClick = function () {
	addCardToHand(dealerHand);
	addCardToHand(playerHand);
};

const addCardToHand = function (hand) {
	let cardImageDealer1 = document.createElement("img");
	cardImageDealer1.src = "./images/10_of_clubs.png";
	hand.append(cardImageDealer1);
};

dealButton.addEventListener("click", handleDealClick);
hitButton.addEventListener("click", handleHitClick);

buildDeck();
console.table(deck);
