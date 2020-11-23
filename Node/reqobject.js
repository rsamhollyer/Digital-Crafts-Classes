const http = require("http");
const port = 5566;

const server = http.createServer((req, res) => {
	console.log(req);
	res.end();
});

server.listen(port, () => {
	console.log(`Running on port ${port}`);
});
