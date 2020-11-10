import { createCard } from "./dom.js";

let bodyEl = document.querySelector("body");
bodyEl.append(createCard("A Thingy", "Lorem stuffy", "-This Dude"));
bodyEl.append(
	createCard("Dudicus", "Some much fluffyness", "-Some other Chad")
);
bodyEl.append(
	createCard(
		"What ever man",
		"Help! I'm stuck i cyberspace",
		"-A Cantankerous Spinster"
	)
);
