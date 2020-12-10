const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const db = require("./bookDB");

const app = express();
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
	res.render(`index`, {
		locals: {
			db,
		},
		partials: {
			head: "/partials/headers",
			foot: "/partials/footers",
		},
	});
});

app.get("/app/:isbn", (req, res) => {
	const { isbn } = req.params;
	const db2 = db.filter((o) => o.isbn === isbn);

	res.render("book", {
		partials: {
			head: "/partials/headers",
			foot: "/partials/footers",
		},
		locals: {
			db2,
		},
	});
});

server.listen(port, hostname, () => {
	console.log(`http://${hostname}:${port}`);
});
