const cipher = function (string, offset) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
	let stringToDecipher = [...string.toUpperCase()];

	const lookupTable = alphabet.reduce((accumulator, current, idx) => {
		accumulator[current] = idx;
		return accumulator;
	}, {});

	let decipheredString = stringToDecipher.map((item) => {
		const characterIndex = lookupTable[item];
		if (characterIndex === undefined) return " ";

		let shiftedIndex = characterIndex + offset;
		if (shiftedIndex > 25) {
			shiftedIndex -= 26;
		} else if (shiftedIndex < 0) {
			shiftedIndex += 26;
		}
		return alphabet[shiftedIndex];
	});
	return decipheredString.join("");
};

let test = cipher("Genius without education is like silver in the mine", 13);
console.log(test);
