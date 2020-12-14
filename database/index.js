//npm i sequelize pg pg-hstore
//npm i --save-dev sequelize-cli
//npx sequelize-cli init
//npx sequelize-cli model:generate --name Pets --attributes name:string,breed:string
//npx sequelize-cli db:migrate

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const Sequelize = require("sequelize");
const { Pets } = require("./models");

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = "0.0.0.0";

const logger = morgan("tiny");

const db = [];

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.get("/", (req, res) => {
	//browser getting the form
	res.send(`<h1>Hello!</h1><br><a href="/new">Go to the form</a>`);
});

app.get("/new", (req, res) => {
	//rec. browser post request
	res.send(`
<h1>Say something!</h1>
<form method="POST">
  <label>
    Name:
    <input name="name" type="text" autofocus />
  </label>
  <br>
  <label>
    Breed:
    <input name="breed" type="text"  />
  </label>
  <br>
  <input type="submit" value="do it!" />
</form>
    `);
});

//Async means that you will use the await keyword
//This is 'setup' for using await
app.post("/new", async (req, res) => {
	const { name, breed } = req.body;
	/*
  1. Change to async/await
  2. call Pets.create()and pass it form data
  3. res.redirect()
 */
	const newPets = await Pets.create({
		name,
		breed,
	});

	//wwe await until data base tranx is finished THEn we redirect
	res.redirect("/list");
});

app.get("/list", async (req, res) => {
	/*
1.Make async/await
2. call Pets.findAll()
3. Send res with Pets.map()
*/
	const pets = await Pets.findAll();

	res.send(`
<a href="/new">Go to the form</a>
<ul>
  ${pets.map((p) => `<li>${p.name} : ${p.breed}</li>`).join("")}
</ul>
    `);
});

server.listen(PORT, HOST, () => {
	console.log(`Listening at http://${HOST}:${PORT}`);
});
