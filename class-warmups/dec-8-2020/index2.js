const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const app = express();
const server = http.createServer(app);

const port = 4000;
const hostname = "localhost";

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
	res.render("home2");
});

app.get("/:name", (req, res) => {
	const { name } = req.params;
	res.render("name", {
		locals: { name },
	});
});

server.listen(port, hostname);
