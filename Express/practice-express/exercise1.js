const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 4500;
const server = http.createServer(app);

const sendFavicon = (req, res) => {
	fs.readFile("./favicon.ico", (err, data) => {
		if (err) throw err;
		res.send(data);
	});
};

const serveHome = (req, res) => {
	res.send(serveContent("Home"));
};

const serveContent = (title, content) => {
	return `
	<!DOCTYPE html>
	<html>
		<head>
			<title>${title}</title>
		</head>
		<body>
			<h1>${title}</h1>
			<div>${content}</div>
		</body>
	</html>
`;
};

app.get("/favicon.ico", sendFavicon);

app.get(["/", "/home"], serveHome);

// app.get("/home", serveHome);

app.get("/about", (req, res) => {
	res.send(serveContent("About"));
});

app.get("/contact", (req, res) => {
	res.send(serveContent("Contact", "BLAH"));
});

app.get("*", (req, res) => {
	res.send(serveContent("404"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
