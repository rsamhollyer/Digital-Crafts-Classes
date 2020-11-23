const http = require("http");
const port = 5000;

const users = [
	{
		firstName: "Sam",
		lastName: "Hollyer",
		email: `Sam@email `,
	},
	{
		firstName: "Aspen",
		lastName: "Hollyer",
		email: "Aspen@email",
	},
	{
		firstName: "Remi",
		lastName: "Hollyer",
		email: "Remi@email",
	},
];

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	});
	res.write(JSON.stringify(users));
	res.end();
});

server.listen(port, () => {
	console.log(`Running on port ${port}`);
});
