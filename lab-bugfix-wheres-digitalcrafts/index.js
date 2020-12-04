const db = require("./db");

function main() {
	const statesWithAnAtlanta = db.statesWithCity("atlanta");
	console.log("\n\nThere is an Atlanta in these states:");
	for (const st of statesWithAnAtlanta) {
		console.log(st);
	}

	console.log("\n\n============================");

	const statesWithAHouston = db.statesWithCity("houston");
	console.log("\n\nThere is a Houston in these states:");
	//used to be for (const st of statesWithAnAtlanta)
	for (const st of statesWithAHouston) {
		console.log(st);
	}

	console.log("\n\n============================");
	//used to be: const statesWithATampa = statesWithCity("tampa");
	const statesWithATampa = db.statesWithCity("tampa");
	console.log("\n\nThere is a Tampa in these states:");
	//used to be: for (st of statesWithATampa)
	for (const st of statesWithATampa) {
		console.log(st);
	}
}

main();
