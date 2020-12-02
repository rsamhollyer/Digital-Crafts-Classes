const employees = require("./employees-array");

/*
    .map() transforms the elements of one array to another array
 */

/*
WHAT I WANT TO SEE
-Filter out anyone with short last name
-transform their jobTitle to UPPERCASE
{
    lastName:"Herman",
    jobTitle:"CHIEF...." (alluppercased)
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
// const summaryOfEmployees = employees.map(summarize);
// console.log(summaryOfEmployees);

//helperfunction returns true if last name longer than 5 chars for filter
const longName = (e) => e.lastName.length > 5;

// if (longName(employees[0])) {
// 	console.log("YES");
// } else {
// 	console.log("NO");
// }

function capTitle(e) {
	return {
		// jobArea: e.jobArea,
		// lastName: e.lastName,
		//instead of hard coded copying , use the 'sprink' syntax
		...e, //spread operator - which copies all the key/value pairs into this spot.
		jobTitle: e.jobTitle.toUpperCase(),
	};
}

// const emps2 = employees.filter(longName);
// // console.log(emps2);

// const emps3 = emps2.map(summarize);
// // console.log(emps3);

// // console.table(capTitle(employees[0]));

// emps4 = emps3.map(capTitle);
// console.log(emps4);

const emps = employees.filter(longName).map(summarize).map(capTitle);
console.log(emps);
