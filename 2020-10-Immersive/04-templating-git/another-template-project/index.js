const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const db = require("./db");

const app = express();
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

const db2 = [
	{ project: "1 thing", desc: "lalalalal" },
	{ project: "2 thing", desc: "blablahblah" },
	{ project: "3 thing", desc: "lululul" },
];

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

//This is to try it with an array of objects
app.get("/test", (req, res) => {
	const myProjects = [];
	db2.forEach((p) => myProjects.push(p.project));
	res.render("test", {
		locals: {
			myProj: myProjects,
		},
	});
});

app.get("/test/app/:id", (req, res) => {
	const { id } = req.params;
	const desc = [];
	db2.forEach((p) => desc.push(p.desc));
	res.render("test-des", {
		locals: {
			title: id,
			desc,
		},
	});
});

server.listen(port, hostname, () => {
	console.log(`Go to here http://${hostname}:${port}`);
});
