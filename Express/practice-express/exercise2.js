const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4567;
// const fs = require("fs");
let people = require("./people.json");
const serveContent = (title) => {
	return `
	<!DOCTYPE html>
	<html>
		<head>
			<title>${title}</title>
		</head>
		<body>
			<h1>${title}</h1>


			<script src="script.js">
			</script>
		</body>
	</html>
`;
};

app.get(["/", "home"], (req, res) => {
	res.send(serveContent("Home"));
});
//This will send all the people
app.get("/api/people", (req, res) => {
	res.send(people);
});

app.get("/api/people/gender/:gender", (req, res) => {
	const { gender } = req.params;
	let findGender = people.filter((person) => person.gender === gender);
	res.send(findGender);
});

app.get("/api/people/email", (req, res) => {
	res.send(people.map((person) => person.email));
});

app.get("/api/people/email/:email", (req, res) => {
	const { email } = req.params;
	const findEmail = people.find((person) => person.email === email);
	res.send(findEmail);
});

// app.get("/script", (req, res) => {
// 	fs.readFile("./script.js", (err, data) => {
// 		if (err) throw err;
// 		let script = data;
// 	});
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
