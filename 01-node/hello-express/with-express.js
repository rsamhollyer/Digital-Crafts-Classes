const http = require("http");
const express = require("express");

const app = express(); //make me a new app
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
	res.send(`HAI HOME PAGE!`);
});

app.get("/cats", (req, res) => {
	res.send(`
    
    <ul>
        <li><a href="/cats/oakley">Oakley</a></li>
        <li><a href="/cats/milla">Milla</a></li>
        <li><a href="/cats/poe">Poe</a></li>
    </ul>
    
    `);
});

//Route param (:catName) like an argument that is part of the route path
app.get("/cats/:catName", (req, res) => {
	const { catName } = req.params;
	res.send(`<h1>Welcome to the Palace of ${catName}</h1>
    <br>
    <a href="/cats">Back</a>
    `);
});
server.listen(port, hostname, () => {
	console.log(`Listening on port, http://${hostname}:${port}`);
});
