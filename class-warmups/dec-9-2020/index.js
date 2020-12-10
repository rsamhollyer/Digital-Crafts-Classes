const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = morgan("tiny");
const pets = require("./petsdb");

const app = express();
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.use(express.static("public"));
app.use(helmet());
app.use(logger);
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
	res.render("index", {
		locals: {
			title: "Home Page",
		},
		partials: {
			head: "/partials/headers",
			foot: "/partials/footers",
		},
	});
});

app.get("/pets", (req, res) => {
	//User.map() because there is a 1-1 correspondence b/t petname and pet link
	const petLinks = pets.map((p) => `<a href="/pets">${p}</a>`);
	res.render("pets", {
		locals: {
			title: "Pets",
			pets,
		},
		partials: {
			head: "/partials/headers",
			foot: "/partials/footers",
		},
	});
});

app.get("/pets/app/:name", (req, res) => {
	const { name } = req.params;

	res.render("onepet", {
		locals: {
			title: name,
		},
		partials: {
			head: "/partials/headers",
			foot: "/partials/footers",
		},
	});
});

app.get("*", (req, res) => {
	res.status(404).send(`<h1> PAGE NOT FOUND</h1>`);
});

server.listen(port, hostname, () => {
	console.log(`http://${hostname}:${port}`);
});
