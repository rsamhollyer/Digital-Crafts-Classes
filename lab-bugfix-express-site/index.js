const http = require("http");
const express = require("express");

const HOST = "localhost";
const PORT = 9999;
const app = express();
const server = http.createServer(app);

// catch all

// home page
app.get("/", (req, res) => {
	res.send(`
    <h1>Welcome to the Employee API!</h1>
<iframe src="https://giphy.com/embed/3owyoUHuSSqDMEzVRu" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxhomeent-3owyoUHuSSqDMEzVRu">via GIPHY</a></p>
    `);
});

app.get("/hello", (req, res) => {
	res.send(`
    <ul>
    <li><a href="/hello/sam">SAM</a></li>
    <li><a href="/hello/sam2">SAM2</a></li>
    <li><a href="/hello/sam3">SAM3</a></li>
    </ul>
    `);
});

app.get("/hello/:whom", (req, res) => {
	const { whom } = req.params;
	res.send(`Hello, ${whom}!`);
});
app.get("*", (req, res) => {
	res.status(404).send(`
    <h1>Page not found</h1>
    `);
});
server.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}/`);
});
