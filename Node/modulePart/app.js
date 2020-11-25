const http = require("http");
const generateContent = require("./generatecontent");
const serveFile = require("./serveFile");
const { addVisit, lastVisited } = require("./visitCounter");
const port = 6531;

const server = http.createServer((req, res) => {
	if (req.url === "/favicon.ico") return serveFile(req, res, "." + req.url);
	if (req.url === "/styles.css") return serveFile(req, res, "." + req.url);
	let vistedLast = lastVisited(req.connection.remoteAddress);

	addVisit(req.connection.remoteAddress);
	res.writeHead(200);

	const url = new URL(req.headers.host + req.url);

	let page = url.searchParams.get("page");
	let count = url.searchParams.get("count");

	let additional = [];

	url.searchParams.forEach((v, n) => {
		additional.push(`<li>${n} : ${v} </li>`);
	});

	let wrapper = generateContent({
		page,
		count,
		additional,
		vistedLast,
	});

	res.write(wrapper);
	res.end();
});

server.listen(port, () => {
	console.log(`Running on Port ${port}`);
});
