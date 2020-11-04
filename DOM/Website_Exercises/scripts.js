// alert("HI THERE");

// console.log("TESTING");

// let subcontent = document.querySelectorAll(".subcontent");
// subcontent.forEach((item) => console.log("Hi there"));

let content = document.createElement("div");
content.id = "main-content";

let bigList = document.createElement("ul");
let main = document.querySelector("main");

main.append(content, bigList);

for (let i = 0; i < 6; i++) {
	let li = document.createElement("li");
	bigList.append(li);
	li.append(`Stuff ${[i + 1]}`);
}

let subcontent = document.querySelectorAll(".subcontent");

let styles = "background:red; font-size:2em; font-weight:bold;";

subcontent.forEach((idea) => {
	idea.style = styles;
});

let header = document.querySelector("h1");

header.style = "border-bottom: 1px solid; text-align:center; color:green";
header.style.borderBottom = "4px dashed purple";
