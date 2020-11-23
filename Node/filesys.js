//1
const fs = require("fs");

// console.log(Object.keys(fs));

// fs.readFile("test.txt", "utf8", (err, data) => console.log(data));

// 2
fs.readFile("data.json", "utf8", (err, data) => {
	if (err) throw err;
	let output = JSON.parse(data);
	// for (const { name, age } of output) {
	// 	console.log(`${name} is ${age} years old!!`);

	output.map((value) => {
		console.log(`${value.name} is ${value.age} years old!!`);
	});
});

//3

const data = JSON.parse(
	fs.readFileSync("data.json", { encoding: "utf8", flag: "r" })
);

data.map((value) => {
	let { name, age } = value;
	console.log(`This is ${name} and they are ${age} years old`);
});
