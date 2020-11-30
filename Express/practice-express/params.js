const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4567;

db = {
	posts: [
		{
			id: "001",
			title: "Good Things",
			content: "Lorium ipsum",
		},
		{
			id: "002",
			title: "Bad Things",
			content: "FooBar",
		},
	],
	people: [
		{
			id: "p001",
			name: "Clint",
		},
		{
			id: "p002",
			name: "Anna",
		},
	],
	purples: [
		{
			id: 1,
			name: "eggplant",
		},
		{
			id: 2,
			name: "grapes",
		},
	],
};

app.get("/", (req, res) => {
	res.send(`
    <h1>HOME</h1>
    <div id="newData"></div>
    <script>
    fetch("/api/posts")
    .then(res => res.json())
    .then(data => {
        document.querySelector("#newData")
        .append(data[0].title)
    })
    </script>>
    `);
});

app.get("/api/:type/:id", (req, res) => {
	const { id, type } = req.params;
	if (!db.hasOwnProperty(type)) return res.send(null);
	const foundPost = db[type].find((item) => item.id === id);
	res.send(foundPost); //Allows you to put objects, arrays, and other types in there and sets the type in there. Will convert to JSON!
});

app.get("/api/:type", (req, res) => {
	const { type } = req.params;
	res.send(db[type]);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
