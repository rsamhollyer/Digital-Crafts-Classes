let button = document.querySelector(".my-button");
let title = document.querySelectorAll(".title");

const buttonHandle = function (e) {
	e.target.style.backgroundColor = `hsl(
    ${Math.floor(Math.random() * 360)},
    ${Math.floor(Math.random() * 100)}%,
    ${Math.floor(Math.random() * 100)}%
    )`;
};

const handleTitleClick = function (e) {
	e.target.nextElementSibling.classList.toggle("hidden");
};

button.addEventListener("click", buttonHandle);
title.forEach((item) => item.addEventListener("click", handleTitleClick));
