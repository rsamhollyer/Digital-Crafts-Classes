const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 4430;
const server = http.createServer(app);

const sendFavicon = (req, res) => {
	fs.readFile("./favicon.ico", (err, data) => {
		if (err) throw err;
		res.send(data);
	});
};

const _404Content = `
<!DOCTYPE html>
<html>
<head>
<title>An Error Was Found </title>
</head>
<body>
<h1>404</h1>
<blockquote>An Error you have Found</blockquote>
</body>
</html>


`;

const send404 = (req, res) => {
	res.status(404);
	res.send(_404Content);
};

app.get("/favicon.ico", sendFavicon);
app.get("/" || "home", (req, res) => {
	res.send(`<div>You are at the Home Page</div>`);
});

app.get("/about", (req, res) => {
	res.send(`<div>You are at the About Page</div>`);
});

app.get("*", send404);
//A route - something being requested from the server- a URL- we send the info back
//The catch all needs to be last because order does matter
app.get("*", (req, res) => {
	console.log(`A request has been received at the root of the app!`);
	// res.writeHead(200);
	// res.end(`Hello Express`);
	res.send(`Hello Express`); //Combine res.writeHead(200) and res.end combined
});

server.listen(port, () => console.log(`Listening on port ${port}`));
