const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const db = require("./db");

const app = express();
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
	res.render("index", {
		locals: {
			name: Object.keys(db),
		},
	});
});

app.get("/projects", (req, res) => {
	res.render("projects", {
		locals: {
			projects: Object.keys(db.Sam),
		},
	});
});

app.get("/projects/app/:id", (req, res) => {
	const { id } = req.params;
	const details = db.Sam[id];
	res.render("project", {
		locals: {
			title: id,
			details,
		},
	});
});

server.listen(port, hostname, () => {
	console.log(`Go to here http://${hostname}:${port}`);
});
