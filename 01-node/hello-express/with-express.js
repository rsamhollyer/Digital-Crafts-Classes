const http = require("http");
const express = require("express");

const app = express(); //make me a new app
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
	res.send(`HAI!`);
});

server.listen(port, hostname, () => {
	console.log(`Listening on port, http://${hostname}:${port}`);
});
