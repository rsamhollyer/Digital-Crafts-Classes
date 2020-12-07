const nerds = require("nerds");

const app = (req, res) => {
	res.statusCode = 200;
	const { first, last, house, wand } = nerds
		.resolve("Harry Potter")
		.asArray()[0];
	res.write(`<h1>${house}</h1>`);
	res.end(`
        <h2>${first} ${last}</h2>
        <ul>
            <li>${wand}</li>
        </ul>
    `);
};
module.exports = app;
