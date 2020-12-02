const places = require("./places.json");

// console.log(places["Georgia"]["Atlanta"]["East Lake"]["Chris' House"]);
// console.log(
// 	places.Georgia.Atlanta["East Lake"]["Chris' House"]["Living Room"][
// 		"Oakley's Bed"
// 	]
// );
/*
Which shuold you use?
    - Use backticks `` unless you can't because you are using very old code
*/

// ACTIVITY
//Write a func that prints the city names in Georgia
const cityNames = (state) => Object.keys(places[state]);

// console.log(cityNames("Georgia"));

const getCities = (state) => console.log(Object.keys(places[state]));

// getCities("Texas");

const getNeighborhood = (n, country) => {
	let didFind = false;

	//want to see East Lake, atlanta
	// Find a neighborhood (which is level 3 in data)
	const states = Object.keys(country);

	for (let state of states) {
		const cities = Object.keys(places[state]);

		for (let c of cities) {
			const nhs = Object.keys(country[state][c]);

			for (let nh of nhs) {
				if (n === nh) {
					console.log(`${nh}, ${c}`);

					didFind = true;
				}
			}
		}
	}

	if (!didFind) {
		console.log(`${n} does not exist in that contry`);
	}
};
getNeighborhood("East Lake", places);
