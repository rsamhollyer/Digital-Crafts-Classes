//A function is like a recipe
//FUNCTION DECLARATION
function helloLiz() {
	console.log("Hello World");
}
//You have to "make" the recipe (call the fnc)

function helloTurkey() {
	console.log("Hello Turkey");
}

function hey() {
	const whom = "Oakley";
}

// function helloWhom(person) {
// 	console.log(`Hello ${person}`);
// }

// helloLiz();
// helloTurkey();

//FUNCTION EXPRESSION ASSIGNED TO VARIABLE

//1. Use func name  as a const variable
//2. On RHS, copy/paste function
//3. Delete name from RHS of assignment

// const helloWhom = function (person) {
// 	console.log(`Hello ${person}`);
// };

//FUNCTION AS ARROW

//0. Copy/Paste
//1. delete the word 'function' from the RHS
//2. Place a fat arrow after paren

const helloWhom = (person) => {
	console.log(`Hello ${person}`);
};

helloWhom("Someone");

//This is a one-liner with an implicit return
const makeSandwich = (toppings) => `Here is your ${toppings} sandwich!`;

const mySandwich = makeSandwich("Tofu");
console.log(mySandwich);
