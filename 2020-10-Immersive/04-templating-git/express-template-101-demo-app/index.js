const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const app = express();
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.engine("html", es6Renderer); // register a new view engine to handle html type
app.set("views", "templates"); //What directory to look in for files
app.set("view engine", "html"); //default type

app.get("/", (req, res) => {
	// res.send(`HEELLLOOO WURLD`);
	res.render("home");
});

app.get("/:word", (req, res) => {
	const { word } = req.params;
	res.render("greet", {
		locals: {
			word,
		},
	});
});

server.listen(port, hostname, () => {
	console.log(`Running on http://${hostname}:${port}`);
});
