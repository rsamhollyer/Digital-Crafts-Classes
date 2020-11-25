const fs = require("fs");

let visits = JSON.parse(fs.readFileSync("./visits.json", "utf8"));

const addVisit = (address) => {
	console.log(`A visitor from ${address} has been added`);

	visits = [
		...visits.filter((visit) => visit.address !== address),
		{ address, time: new Date().getTime() },
	];
	console.log(visits);
	fs.writeFile("./visits.json", JSON.stringify(visits), (err) => {
		if (err) throw err;
		console.log(`Visit is recorded`);
	});
};

const lastVisited = (address) => {
	let lastVisit = visits.find((visit) => visit.address === address);
	return lastVisit ? lastVisit.time : new Date().getTime();
};

module.exports = { addVisit, lastVisited };
