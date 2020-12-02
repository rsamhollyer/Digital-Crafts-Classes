/*
1. Add up the number of likes
    each # in array is the number of likes for a single post

2. Place odd/even tester in a function and confirm if true
    -returning a comparison only works if you intend to return a boolean
*/

const likes = require("./numbers");

const oddOrEven = (number) => {
	if (number % 2 === 0) {
		console.log(`${number}.Even`);
	} else {
		console.log(`${number}.Odd`);
	}
};

const isEven = (number) =>
	number % 2 === 0 ? `${number}. true` : `${number}. false`;

const anotherEven = (n) => n % 2 === 0;
// if (Array.isArray(likes)) {
// 	console.log(`Yes that's an array`);
// } else {
// 	console.log(`Nope`);
// }
// console.log(likes[0]);

//Is the number at index0 even or odd?
// if (likes[0] % 2 === 0) {
// 	console.log(`It's Even`);
// } else {
// 	console.log(`It's odd`);
// }

// likes.forEach((number) => oddOrEven(number));

// console.log(`likes[0] is even? ${anotherEven(likes[0])}`);

//Use our isEven with the likes array
// for (let l of likes) {
// 	if (anotherEven(l)) {
// 		console.log(l);
// 	}
// }

//.filter to produce a new array that only contains evens

const onlyEvens = likes.filter((like) => anotherEven(like));
// console.log(onlyEvens);
// console.log(onlyEvens.length);
//Filter does not mutate the array
// console.log(likes.length);

//How many posts got over 20000 likes?

const lotsOfLikes = (n) => n > 20000;
const over20k = likes.filter(lotsOfLikes);
console.log(over20k.length);
