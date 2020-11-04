const banner = function (string) {
	let array = [];
	do {
		array.push("-");
	} while (array.length < string.length / 2);
	console.log(array.join(" "));
	console.log(`${string}`);
	console.log(array.join(" "));
};

let test = banner("Welcome to Hell");
