const http = require("http");
const express = require("express");
const { v4: uuid4 } = require("uuid");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4567;

const timeLogger = (req, res, next) => {
	let requestTime = new Date();
	req.requestTime = requestTime;
	next();
};

const logTheIp = (req, res, next) => {
	let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
	ip = ip.toString().replace("::ffff:", "");
	req.yourip = ip;
	console.log(ip);
	next();
};

const makeUUID = (req, res, next) => {
	let yourID = uuid4();
	req.yourID = yourID;
	next();
};
const sendFavicon = (req, res) => {
	fs.readFile("./favicon.ico", (err, data) => {
		if (err) throw err;
		res.send(data);
	});
};

app.get("/favicon.ico", sendFavicon);

app.get(["/", "/home"], timeLogger, makeUUID, logTheIp, (req, res) => {
	console.log(req.requestTime);
	console.log("*******");
	console.log(req.yourID);
	console.log("******");
	console.log(req.yourip);
	let yourData = `The time is ${req.requestTime} 
					<br>
					Your super secret ID is : ${req.yourID}
					<br>
					Your home is ${req.yourip}								`;
	res.send(yourData);
});
app.get("/api", timeLogger, makeUUID, logTheIp, (req, res) => {
	console.log(req.requestTime);
	console.log("*******");
	console.log(req.yourID);
	console.log("******");
	console.log(req.yourip);

	let yourData = `The time is ${req.requestTime} 
					<br>
					Your super secret ID is : ${req.yourID}
					<br>
					Your home is ${req.yourip}								`;
	res.send(yourData);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
