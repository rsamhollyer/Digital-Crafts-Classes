const colors = require("./colors.json");
const coffee = require("./coffee.json");
const products = require("./products.json");
//1.

const onlyOneColor = (arr, string) => {
	const newArr = arr.filter((c) => c === string);
	return newArr;
};
// console.log(onlyOneColor(colors, "green"));

//2.

const onlyEspresso = (arr, string) => {
	const newArr = arr
		.filter((o) => o.order === string)
		.reduce((accum, cur) => {
			return (accum += cur.cost);
		}, 0);
	// newArr.reduce((accum, cur) => {
	// 	return (accum += cur.price);
	// });
	const results = Math.round((newArr * 100) / 100);
	return results;
};

// console.log(onlyEspresso(coffee, "espresso"));

//3.
const onlyOnSale = (arr) => {
	const newArr = arr.filter((o) => o.price < o.originalPrice);
	return newArr;
};

// console.log(onlyOnSale(products));
