const http = require("http");
const express = require("express");

const app = express(); //make me a new app
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";

//app, please listen for GET Requests (http request)
// '/' means they're asking for the home page
// the anom function will handle the Request (http request)
//and send back the Response (http response)
app.get("/", (req, res) => {
	//req and res are passed to my anom function
	//I need to make room for them with placeholders
	res.send(`HAI!`);
});

//turn on the server
//pass in three arguements
//What port do I listen on? (phone extension number)
//What is my IP address? (office suite number)
//Callback that runs after we've started
server.listen(port, hostname, () => {
	console.log(`Listening on port, http://${hostname}:${port}`);
});
