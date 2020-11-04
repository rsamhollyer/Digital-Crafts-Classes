const body = document.querySelector("body");

h1 = document.createElement("h1");
ul = document.createElement("ul");

h1.innerText = "This is a title";

ul.innerText = "This is a list";

body.append(h1, ul);

for (let i = 0; i < 3; i++) {
	li = document.createElement("li");
	li.className = "list-item";
	ul.append(li);
	li.innerText = `Stuff ${i + 1}`;
}

listItems = document.querySelectorAll(".list-item");

listItems.forEach((item) => {
	item.style = "color: red; border:1px solid black; list-style:none;";
});

h1.style =
	"text-align:center; color:black; font-size:4.5rem; font-weight:bold; border-bottom:2px solid; margin:0;";

ul.style = "font-size:1.5ren; font-weight:bold; padding:1px;";
