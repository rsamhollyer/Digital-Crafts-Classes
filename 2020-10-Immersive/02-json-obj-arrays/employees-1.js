const employees = require("./employees-array.json");
const employee = employees[0];
// console.log(employee);

/*
Key Value pairs are called:
    -objects in JS
    -hashes in Ruby
    -dictionaries in Python
    - etc...
*/

//DOT SYNTAX
//Use when you know what 'key' you're accessing
// console.log(employee.jobTitle);

//BRACKET SYNTAX
// console.log(employee["jobTitle"]);

// DESTRUCTURE
// const { jobTitle } = employee;

//HOW TO GET keys

// console.log(Object.keys(employee));
const theKeys = Object.keys(employee);
// console.log(theKeys);
for (let k of theKeys) {
	const theValue = employee[k];
	console.log(theValue);
	console.log(k); //Prints only the key
	console.log(employee[k]); //prints only the value for the key
	// firstName :'Elsie'
	// lastName : 'Orn
}

for (let i = 0; i < theKeys.length; i++) {
	let k = theKeys[i];
	console.log(`${i}: ${k}: ${employee[k]}`);
}

// let k = "firstName";
// let theValue = employee[k];
// console.log(`${k} : ${theValue}`);
