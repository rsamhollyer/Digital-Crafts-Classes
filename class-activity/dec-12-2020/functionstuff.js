//1. Write a function that return the birthday of emp[0]
//2. Write a function that returns the jobArea of emp[0]
//3. Write a func that receives a key and returns the corresponding value from the empl[0]

const employees = require("../../../2020-10-Immersive/02-json-obj-arrays/employees-array.json");

const employee = employees[0];
console.log(employee);

//1.
// const getBirthday = (e) => {
// 	let { birthDate } = e;
// 	return birthDate;
// };

const anotherBday = (e) => `${e.firstName} ${e.lastName}:  ${e.birthDate}`;
console.log(`BDAY2`, anotherBday(employee));

// console.log(`BDAY`, getBirthday(employee));

//2.
const getJobArea = (e) => e.jobArea;
// {
// 	let { jobArea } = e;
// 	return jobArea;
// };
console.log(`JOB`, getJobArea(employee));

//3.

const getValue = (key) => employee[key];
// {
// let keyValue = employee[key];
// return keyValue;
// };

console.log(getValue("suffix"));

const alldays = employees.map(anotherBday);
// console.log(alldays);
