let button = document.querySelector(".my-button");
let title = document.querySelectorAll(".title");
let anotherButton = document.querySelector(".another-button");

const buttonHandle = function (e) {
	e.target.style.backgroundColor = `hsl(
    ${Math.floor(Math.random() * 361)},
    ${Math.floor(Math.random() * 101)}%,
    ${Math.floor(Math.random() * 101)}%
    )`;
};

const handleTitleClick = function (e) {
	e.target.nextElementSibling.classList.toggle("hidden");
};

const handleSecondButton = function (e) {
	let styleOfFont = window
		.getComputedStyle(anotherButton, null)
		.getPropertyValue("font-size");
	let fontSize = parseFloat(styleOfFont);

	if (fontSize < 30) {
		e.target.style.fontSize = fontSize + 2 + "px";
	} else {
		e.target.style.backgroundColor = e.target.style.backgroundColor = `hsl(
            ${Math.floor(Math.random() * 361)},
            ${Math.floor(Math.random() * 101)}%,
            ${Math.floor(Math.random() * 101)}%
            )`;
		anotherButton.removeEventListener("click", handleSecondButton);
	}
};

button.addEventListener("click", buttonHandle);
title.forEach((item) => item.addEventListener("click", handleTitleClick));

anotherButton.addEventListener("click", handleSecondButton);
