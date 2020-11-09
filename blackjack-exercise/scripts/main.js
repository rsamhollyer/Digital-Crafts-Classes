// window.addEventListener("DOMContentLoaded", function () {
// 	// Execute after page load
// });

let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let dealerHandEl = document.querySelector("#dealer-hand");
let playerHandEl = document.querySelector("#player-hand");
let playerPointsEl = document.querySelector("#player-points");
let dealerPointsEl = document.querySelector("#dealer-points");
let messageBoxEl = document.querySelector("#messages");
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerPoints = 0;
let dealerPoints = 0;

const addPoints = function () {
	dealerPointsEl.innerHTML = dealerPoints;
	playerPointsEl.innerHTML = playerPoints;
};

const buildCard = function (rank, suit) {
	let imgURL = `./images/${rank}_of_${suit}.png`;
	return { rank, suit, imgURL }; //suit, point, imgURL,
};

const buildDeck = function () {
	let ranks = Array.from(Array(15).keys());
	ranks.shift();
	ranks.shift();
	let suits = "hearts,spades,clubs,diamonds".split(",");
	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			deck.push(buildCard(rank, suit));
		});
	});
	shuffleDeck();
};

const shuffleDeck = function () {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = deck[i];
		deck[i] = deck[j];
		deck[j] = temp;
	}
};

const playerBusted = function () {
	if (playerPoints > 21) {
		messages.innerText = "Player Busted!!";
		standButton.removeEventListener("click", handleStandClick);
		hitButton.removeEventListener("click", handleHitClick);
		standButton.disabled = true;
		hitButton.disabled = true;
		return true;
	} else if (dealerPoints > 21) {
		messages.innerText = "Dealer Busted!!";
		standButton.removeEventListener("click", handleStandClick);
		hitButton.removeEventListener("click", handleHitClick);
		standButton.disabled = true;
		hitButton.disabled = true;
		return true;
	}
	return false;
};

const handleDealClick = function () {
	standButton.disabled = false;
	hitButton.disabled = false;
	resetGame();
	addCardToHand(dealerHand, dealerHandEl);
	addCardToHand(playerHand, playerHandEl);
	addCardToHand(dealerHand, dealerHandEl);
	addCardToHand(playerHand, playerHandEl);
	calculatePoints(playerHand, false);
	calculatePoints(dealerHand, true);
};

const handleHitClick = function () {
	addCardToHand(playerHand, playerHandEl);
	calculatePoints(playerHand, false);
};

const handleStandClick = function () {
	hitButton.removeEventListener("click", handleHitClick);
	while (dealerPoints < 17 || dealerPoints < playerPoints) {
		addCardToHand(dealerHand, dealerHandEl);
		calculatePoints(dealerHand, true);
	}
	hitButton.disabled = true;
	determineWinner();
};

const addCardToHand = function (hand, handEl) {
	const cardToDeal = deck.pop();
	let cardImageDealer1 = document.createElement("img");
	cardImageDealer1.src = cardToDeal.imgURL;
	handEl.append(cardImageDealer1);
	hand.push(cardToDeal);
};

const calculatePoints = function (hand, isDealer) {
	let points = 0;
	hand.sort((a, b) => a.rank - b.rank);
	hand.forEach((card) => {
		switch (card.rank) {
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				points += card.rank;
				break;

			case 10:
			case 11:
			case 12:
			case 13:
				points += 10;
				break;

			case 14:
				points + 11 < 21 ? (points += 11) : (points += 1);

			default:
				break;
		}
	});

	if (isDealer) {
		dealerPoints = points;
	} else {
		playerPoints = points;
	}

	addPoints();
	playerBusted();
};

const resetGame = function () {
	playerPoints = 0;
	dealerPoints = 0;
	playerHand = [];
	dealerHand = [];
	deck = [];
	dealerHandEl.innerHTML = "";
	playerHandEl.innerHTML = "";
	messageBoxEl.innerText = "";
	dealButton.addEventListener("click", handleDealClick);
	hitButton.addEventListener("click", handleHitClick);
	standButton.addEventListener("click", handleStandClick);

	buildDeck();
};

const determineWinner = function () {
	if (playerPoints > dealerPoints && !playerBusted()) {
		messageBoxEl.innerText = "You won! You beat that smelly computer!";
	} else if (dealerPoints > playerPoints && !playerBusted()) {
		messageBoxEl.innerText = "The dealer won! You beat that stinky meatbag!";
	} else if (playerPoints === dealerPoints) {
		messageBoxEl.innerText = "It's a tie....so yay?!";
	}
};

// buildDeck();

dealButton.addEventListener("click", handleDealClick);
hitButton.addEventListener("click", handleHitClick);
standButton.addEventListener("click", handleStandClick);
