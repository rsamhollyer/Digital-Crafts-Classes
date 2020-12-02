const likes = require("./numbers-as-strings");
console.log(likes);

//Transform array of strings to an array of numbers so I can work on them
//Can use .map() to accomplish this.
//1. Write a function that an transform one value.
//2. pass as a callback to .map()
//3. Store the result

const stringToNumber2 = (s) => parseInt(s, 10);
// const stringToNumber = (n) => +n;

const newLikes = likes.map(stringToNumber2);
console.log(newLikes);

//WHAT MAP IS DOING
// const newArray = [];

// for (let i of likes) {
// 	newArray.push(stringToNumber2(i));
// }

// console.log(newArray);
