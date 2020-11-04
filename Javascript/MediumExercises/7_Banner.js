// const banner = function (string) {
// 	let array = [];
// 	do {
// 		array.push("-");
// 	} while (array.length < string.length / 2);
// 	console.log(array.join(" "));
// 	console.log(`${string}`);
// 	console.log(array.join(" "));
// };

// let test = banner("Welcome to Hell");

function printBanner(text) {
	let l = text.length;
	let s = "";
	for (let i = 0; i < l + 2; i++) s += "-";

	console.log(s);
	console.log("-" + text + "-");
	console.log(s);
}
printBanner("THIS IS HELL");
