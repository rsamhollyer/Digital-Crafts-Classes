/* 

-hello to an array of names 1 at a time
    -for loops - if you need more control
    -for of loops - when you only need array elements one at a time
    forEach loops


-hello to names longer than 5 letters 
    -filter
-hello to a name if it's in the array, otherwise hello World
    -find

*/

const names = ["Alice", "Bob", "Charlie", "Dom", "Elle"];
// for (let i = 0; i < names.length; i++) console.log(`Hello ${names[i]}`);
// for (let name of names) console.log(`Hello ${name}`);
// names.forEach((name) => console.log(`Hello ${name}));
const hello = (whom) => console.log(`Hello ${whom}`);
const bye = (whom) => console.log(`Good Bye ${whom}`);

// names.forEach(hello);
// names.forEach(bye);

// const combo = (name) => {
// 	hello(name);
// 	bye(name);
// };

// names.forEach((name) => {
// 	hello(name);
// 	bye(name);
// });

const helloLongName = (n) => {
	if (n.length > 4) {
		hello(n);
	}
};

const isNameLong = (n) => n.length > 4; // This is so much better a format
// return n.length > 4;
// if (n.length > 4) {
// return true;
// } else {
// return false;
// }

// const longNames = names.filter(isNameLong);
// console.log(longNames);

// names.forEach((name) => helloLongName(name));

// const longNames3 = names.filter((name) => name.length > 4);
// console.log(longNames3);

//Implementation of .filter

const myFilter = (array, callback) => {
	//1.Create new empty array
	let newArray = [];

	//2. Iterate thru the items in the array passed
	for (let n of array) {
		//3 use callback fnc as a test
		if (callback(n)) {
			//4. If item passes, add it to  new array
			newArray.push(n);
		}
	}
	//5. Return new array
	return newArray;
};
// const longerNames = myFilter(names, isNameLong);
// console.log("NEW FILTER", longerNames);
