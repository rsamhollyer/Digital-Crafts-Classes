const employees = require("./employees-array");

/*
    .map() transforms the elements of one array to another array
 */

const numbers = [1, 2, 3, 4, 5];
const squareItBaby = (n) => Math.pow(n, 2);

// const newNums = numbers.map(squareItBaby);
// console.log(newNums);

// function myMap(arr, callback) {
// 	const newArr = [];

// 	//loop over the elements of array
// 	for (let n of arr) {
// 		//apply callback
// 		const newVal = callback(n);
// 		//store new value
// 		newArr.push(newVal);
// 	}
// 	return newArr;
// }

// const squares2 = myMap(numbers, squareItBaby);

// console.log(squares2);

/*
WHAT I WANT TO SEE
{
    lastName:"Orn",
    jobTitle:"Chief Communication Officer"
}

*/

//.0 Turn Variable into arugment
//1. Turn the variable into Arguements

function summarize(e) {
	//2. Turn console.log() into return

	// const e = employees[0];

	const newObj = {
		lastName: e.lastName,
		jobTitle: e.jobTitle,
	};

	// console.log(newObj);
	return newObj;
}
// console.log(summarize(employees[1]));
const summaryOfEmployees = employees.map(summarize);
console.log(summaryOfEmployees);
