//1
const newFunc = (number) => Math.pow(number, 2);
console.log(newFunc(25));

//2
const secondFunc = (num1, num2) => num1 + num2;
console.log(secondFunc(1, 2));

//3
const printFunc = (item, idx) => console.log(`${idx + 1}.`, item);
const thirdFunc = (arr) => {
	// arr.forEach((item, idx) => console.log(`${idx + 1}.`, item));
	arr.forEach(printFunc);
};

thirdFunc(["Alpha", "Beta", "Gamma"]);
