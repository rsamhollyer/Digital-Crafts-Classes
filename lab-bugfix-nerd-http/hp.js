const nerds = require("nerds");

const app = (req, res) => {
	res.statusCode = 200;
	const { first, last, house, wand } = nerds
		.resolve("Harry Potter")
		.asArray()[0];
	res.write(`<h2>${house}</h2>`);
	res.end(`
        <h1>${first} ${last}</h1>
        <ul>
            <li>${wand}</li>
        </ul>
    `);
};
module.exports = app;
