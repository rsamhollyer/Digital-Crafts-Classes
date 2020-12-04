/*
// Goal: Create (an ugly! xD) fan for something you like!
//Need need directory
//In it npm init -y
-npm install express
-npm install --save-dev nodemon

express app should handle 3 kinds of routes:
 1) Home Page
 2) Listing of something (/movies) etc. - sohould list out 3 individual things in a list
 3) a route param for the name (/movies/:movieName)

 Please hardcode the html if you need something like links or images
*/

const http = require("http");
const express = require("express");

const app = express(); //make me a new app
const server = http.createServer(app);

const port = 3000;
const hostname = "localhost";
app.use(express.static("./assets"));

app.get(["/", "/home"], (req, res) => {
	res.send(`
    <h1>DO YOU LIKE ANIME?</h1>
    <img src = "./homepagephoto.jpg" alt="anime stuff" width="500" height="500">
    <br>
    <ul>
        <li><a href="/yes">YES</a></li>
        <li><a href="/no">NO</a></li>
    `);
});

app.get("/yes", (req, res) => {
	res.send(`
    <h2>WHAT'S YOUR POISION</h2>
    <br>
    <ul>
        <li><a href="/yes/nge">NGE</a></li>
        <li><a href="/yes/bebop">BEBOP</a></li>
        <li><a href="/yes/dbz">DBZ</a></li>
    
    </ul>
    <br>
    <a href="/home">BACK TO HOME</a>
    
    `);
});

app.get("/yes/:animeChoice", (req, res) => {
	const { animeChoice } = req.params;
	res.send(`
    <h2>I LOVE ${animeChoice.toUpperCase()} TOO. LET'S BE FRIENDS</h2>
    <br>
    <a href="/yes">BACK</a>
    
    `);
});

app.get("/no", (req, res) => {
	res.send(`
    <h2>THAT'S OKAY, BUT YOU NEED TO GET BACK TO GOOGLE, SON!</h2>
    <br>
    <a href="http://www.google.com">SHAME</a>`);
});

server.listen(port, hostname, () => {
	console.log(`Listening on ${hostname}:${port}`);
});
