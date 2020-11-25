const fs = require("fs");

// //1

// fs.writeFile("dummy.txt", "GET REKT", "utf8", (err) => {
// 	if (err) throw err;
// 	console.log("File saved");
// });

// let cars=
// [
// 	{ name: "Car 1", speed: 100, year: 1 },
// 	{ name: "Car 2", speed: 200, year: 2 },
// 	{ name: "Car 3", speed: 300, year: 3 },
// ];

// fs.writeFile("cars.json", JSON.stringify(cars), "utf8", (err) => {
// 	if (err) throw err;
// 	console.log("SAVED CARS");
// });

// cars = JSON.parse(fs.readFileSync("cars.json"));

// const addToCars = (newCars) => {
// 	newCars.forEach((car) => {
// 		cars.push(car);
// 		fs.writeFile("cars.json", JSON.stringify(cars), (err) => {
// 			if (err) throw err;
// 			console.log("NEW CAR SIR");
// 		});
// 	});
// };

// let theseAreNew = [
// 	{ name: "Car 4", speed: 500, year: 4 },
// 	{ name: "Car 5", speed: 600, year: 6 },
// ];

// addToCars(theseAreNew);

//3
