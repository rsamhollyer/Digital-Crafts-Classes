const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 9999;
const hostname = "0.0.0.0";

app.get(["/", "/home"], (req, res) => {
	res.send(`
    <h1>HAI WURLD!</h1>`);
});

app.get("/cats", (req, res) => {
	res.send(`
    <h1>MEOW (CHEEZBURGER)</h1>`);
});

app.get("/dogs", (req, res) => {
	res.send(`
    <h1>Le WUUF!</h1>`);
});

app.get("/cats_and_dogs", (req, res) => {
	res.send(`
    <h1>BILL MURRAY</h1>`);
});

app.get("/greet/:name", (req, res) => {
	const { name } = req.params;
	const newName = name.charAt(0).toUpperCase() + name.slice(1);
	res.send(`
    <h2>Why hello ${newName}. Welcome to mah lahbooritury!`);
});

server.listen(port, hostname, () => {
	console.log(`Listening on ${hostname}:${port}`);
});
