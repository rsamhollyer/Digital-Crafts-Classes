//1
// let letters = ["a", "b", "c", "d"];
// let numbers = [1, 2, 3, 4];

// let newArray1 = [...letters, ...numbers];
// console.log(newArray1);

// let newArray2 = [...numbers, ...letters];
// console.log(newArray2);
//2
const cars = [
	{
		make: "Chevy",
		model: "Corvette",
		year: 2019,
	},
	{
		make: "Ford",
		model: "Mustang",
		year: 2018,
	},
	{
		make: "Tesla",
		model: "Model 3",
		year: 2020,
	},
	{
		make: "GMC",
		model: "h2",
		year: 2010,
	},
];

let cars2 = [
	...cars,
	{ make: "Honda", model: "Civic", year: 2010 },
	{ make: "Toyota", model: "Prius", year: 2019 },
];

// console.log(cars2);

// let cars3 = cars2.filter((car) => car.year >= 2018);
// console.log(cars3);
// let cars4 = [...cars3, { make: "Ford", model: "Focus", year: 2010 }];
// console.log(cars4);

// cars4.sort((a, b) => a.year - b.year);
// console.log(cars4);

// let cars5 = [{ make: "Ford", model: "Focus", year: 2010 }, ...cars];
// console.log(cars5);

let cars6 = [...cars].sort((a, b) => a.year - b.year);

console.log(
	cars,
	`
    
    
`,
	cars6
);
