const fs = require("fs");

let lockfile = false;

const writeFile = () => {
	//If not locked...
	if (!lockfile) {
		//lock the file
		lockfile = true;

		//then write the file
		fs.writeFile("file.txt", "Hello Node File!!", "utf8", (err) => {
			if (err) throw err;

			//done writing unlock file
			lockfile = false;
			console.log("File is saved");
		});
	} else {
		//tell user file locked
		console.log("File is locked");
	}
};

// let ships = [
// 	{
// 		type: "Freighter",
// 		speed: "medium",
// 		cargo: "large",
// 		payload: "low",
// 	},
// 	{
// 		type: "Fighter",
// 		speed: "fast",
// 		cargo: "none",
// 		payload: "medium",
// 	},
// 	{
// 		type: "Bomber",
// 		speed: "slow",
// 		cargo: "none",
// 		payload: "high",
// 	},
// ];

// fs.writeFile("ship.json", JSON.stringify(ships), "utf8", (err) => {
// 	if (err) throw err;
// 	console.log("JSON Written");
// });

// writeFile();

// ships = JSON.parse(fs.readFileSync("ship.json"));
// console.log(ships);

// const addShip = (newShip) => {
// 	ships.push(newShip);
// 	fs.writeFile("ship.json", JSON.stringify(newShip), (err) => {
// 		if (err) throw err;
// 		console.log("New Data Saved");
// 	});
// };

// addShip({ type: "speeder", speed: "Fast", cargo: "none", payload: "none" });
