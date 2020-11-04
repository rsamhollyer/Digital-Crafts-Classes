let myObjects = [
	{ url: "http://www.google.com", id: "google-link", text: "Goto Google" },
	{ url: "http://www.youtube.com", id: "youtube-link", text: "Goto YouTube" },
	{ url: "http://www.twitter.com", id: "twitter-link", text: "Goto Twitter" },
];

const body = document.querySelector("body");
const ul = document.createElement("ul");
body.append(ul);

myObjects.forEach((object) => {
	let newLI = document.createElement("li");
	let newAnchor = document.createElement("a");
	ul.append(newLI);
	newLI.append(newAnchor);
	newAnchor.href = object["url"];
	newAnchor.id = object["id"];
	newAnchor.innerText = object["text"];
	newAnchor.target = "_blank";
});
