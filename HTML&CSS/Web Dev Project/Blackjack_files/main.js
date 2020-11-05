window.addEventListener("DOMContentLoaded", function () {
	// Execute after page load
});

let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let dealerHand = document.querySelector("#dealer-hand");
let playerHand = document.querySelector("#player-hand");

const handleDealClick = function () {
	let cardImage = document.createElement("img");
	cardImage.src = "./images/10_of_clubs.png";
	dealerHand.append(cardImage);
	let cardImage2 = document.createElement("img");
	cardImage2.src = "./images/10_of_clubs.png";
	playerHand.append(cardImage2);
};

const handleHitClick = function (e) {
  let cardImage = document.createElement("img");
	cardImage.src = "./images/10_of_clubs.png";
	dealerHand.append(cardImage);
	let cardImage2 = document.createElement("img");
	cardImage2.src = "./images/10_of_clubs.png";
	playerHand.append(cardImage2);

dealButton.addEventListener("click", handleDealClick);
hitButton.addEventListener("click", handleHitClick);
