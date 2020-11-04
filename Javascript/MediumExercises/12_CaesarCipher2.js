const cipher = function (string, offset) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
	let stringToDecipher = [...string.toUpperCase()];

	let lookupTable = {};

	alphabet.forEach((item, idx) => {
		lookupTable[item] = idx;
	});

	let decipheredString = stringToDecipher.map((item) => {
		const characterIndex = lookupTable[item];
		if (characterIndex === undefined) return " ";

		let shiftedIndex = characterIndex - offset;
		if (shiftedIndex > 25) {
			shiftedIndex -= 26;
		} else if (shiftedIndex < 0) {
			shiftedIndex += 26;
		}
		return alphabet[shiftedIndex];
	});
	return decipheredString.join("");
};

let test = cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13);
console.log(test);
