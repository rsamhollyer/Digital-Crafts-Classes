const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 5731;
const someObj = { people: [], place: [], things: [] };

const timeLogger = (req, res, next) => {
	let requestTime = new Date();
	req.requestTime = requestTime;
	next();
};

const checkObject = (req, res, next) => {
	let { type } = req.params;

	// if (!someObj.hasOwnProperty(type))
	// 	return res.send(`Your type, ${type}, does not exist`);

	if (!Object.keys(someObj).find((o) => o === type))
		return res.send(`Your type, ${type}, does not exist`);

	// if (!Object.keys(someObj).includes(type))
	// 	return res.send(`Your type, ${type}, does not exist`);
	next();
};

const setMagicId = (req, res, next) => {
	req.magicId = Math.random();
	console.log(req.magicId);
	next();
};

app.use("/api", setMagicId);

// app.get("/", timeLogger, (req, res) => {
// 	console.log(req.requestTime);
// 	res.send(`The time is ${req.requestTime}`);
// });
// app.get("/api", (req, res) => {
// 	res.send(someObj);
// });
// app.get("/api/:type", checkObject, (req, res) => {
// 	console.log(`This type is cool`);
// 	res.send(req.params.type);
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
