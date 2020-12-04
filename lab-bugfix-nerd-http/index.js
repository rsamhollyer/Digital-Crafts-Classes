const http = require("http");
//Was: const hp = require("hp");
const hp = require("./hp");
const HOST = "0.0.0.0";
const PORT = 9999;

const server = http.createServer(hp);

server.listen(PORT, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
