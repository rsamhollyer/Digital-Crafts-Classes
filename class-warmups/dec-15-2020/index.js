const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const Sequelize = require("sequelize");
const morgan = require("morgan");
const app = express();
const server = http.createServer(app);
const logger = morgan("tiny");
const port = 3000;
const hostname = "localhost";
const controllers = require("./controllers/main-controller");

const PORT = 3000;
const HOST = "localhost";

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(logger);

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.get("/", controllers.home);

server.listen(PORT, HOST);
