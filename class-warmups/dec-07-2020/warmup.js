// # 1. Write a "Hello World" program using Express
// const http = require("http");
// const express = require("express");
// const app = express();
// const server = http.createServer(app);

// const port = 3000;
// const hostname = "localhost";

// app.get(["/", "/home"], (req, res) => {
// 	res.send(`<h1>HULO WURLD</h1>`);
// });

// server.listen(port, hostname, () => {
// 	console.log(`Listening on http://${hostname}:${port}`);
// });

// Create a new project directory for your code.

// # 2. What does this code do?

// ```js
// const breakfastOptions = [
//     'banana',
//     'cereal',
//     'croissant',
//     'coffee',
//     'granola + yogurt',
//     'smoothie',
//     'menthols and diet coke'
// ];

// for (let i=0; i<breakfastOptions.length; i++) {
//     console.log(`I would like ${breakfastOptions[i]} to go.`);
// }
// ```

// Write a brief description (2-3 sentences).

/*

This code loops thru the array 'breakfastOptions' and console logs the sentence, interpolating the breakfast item at each index(i).

*/

// # 3. Rewrite the code from #2

// Do you know of other ways to accomplish the same result?
const breakfastOptions = [
	"banana",
	"cereal",
	"croissant",
	"coffee",
	"granola + yogurt",
	"smoothie",
	"menthols and diet coke",
];

// breakfastOptions.forEach((i) => console.log(`I would like ${i} to go.`));

// for (const item of breakfastOptions) console.log(`I would like ${item} to go.`);
