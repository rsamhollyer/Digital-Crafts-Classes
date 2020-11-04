const numberPrinter = function (start, stop) {
	for (let i = start; i <= stop; i++) console.log(i);
};

let test = numberPrinter(1, 10);

const otherPrinter = function (start, stop) {
	let i = start;
	do {
		console.log(i);
		i++;
	} while (i <= stop);
};

let test2 = otherPrinter(1, 10);
