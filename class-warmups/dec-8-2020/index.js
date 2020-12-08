const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const app = express();
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

server.listen(port, hostname);

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/lift-off", (req, res) => {
	res.render("lift-off");
});
