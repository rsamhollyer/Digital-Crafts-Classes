const leetSpeak = function (string) {
	let array = [...string.toUpperCase()];
	let sentence = [];

	array.forEach((char, idx) => {
		char === "A"
			? (array[idx] = 4)
			: char === "E"
			? (array[idx] = 3)
			: char === "I"
			? (array[idx] = 1)
			: char === "O"
			? (array[idx] = 0)
			: char === "S"
			? (array[idx] = 5)
			: char === "T"
			? (array[idx] = 7)
			: char === "G"
			? (array[idx] = 6)
			: null;
	});

	return array.join(" ");
};

let test = leetSpeak("This is kinda cool");
console.log(test);
