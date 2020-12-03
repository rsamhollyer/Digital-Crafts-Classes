//.1

const greeting = () => {
	console.log(`HAI!`);
};

const rude = () => {
	console.log(`SHUT IT`);
};

//.2
const array = "123456789".split("");

const oddOrEven = (arr, choice) => {
	let yourChoice = choice.toLowerCase();
	if (yourChoice === "even") {
		return arr.filter((n) => n % 2 === 0);
	} else if (yourChoice === "odd") {
		return arr.filter((n) => n % 2 !== 0);
	} else {
		return `You need to enter 'Even' or 'Odd'.`;
	}
};
// console.log(oddOrEven(array, "odd"));

//3.
const callMeMaybe = (number, func1, func2) => {
	try {
		n = parseInt(number, 10);
		//if there is an error if/else
		console.log("Finished parseInt", number);

		if (isNaN(number)) {
			number = Nan;
			throw Error("DOES NOT COMPUTE");
		}
	} catch (e) {
		console.log(e);
	}

	// if (isNaN(number)) {
	// 	number = 2;
	// }
	if (number % 2 === 0) {
		func1();
	} else if (number % 2 !== 0) {
		func2();
	} else {
		console.log("Nope");
	}
};
//We raninto a problem with NaN situation because it still if technically a number data type.

callMeMaybe("stuff", greeting, rude);

// function ro() {
// 	return {
// 		name: "Same",
// 	};
// }
// console.log(ro());
