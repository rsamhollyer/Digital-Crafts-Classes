const positives = function (arr) {
	resultant = [];
	arr.forEach((number) => {
		number > 0 ? resultant.push(number) : null;
	});

	return resultant;
};

let test = positives([-1, -2, -3, -4, 5, 6, 7, 8, 9]);

console.log(test);
