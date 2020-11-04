const tipCalc = function (bill, service) {
	return service === "good"
		? (bill *= 1.2).toFixed(2)
		: service === "fair"
		? (bill *= 1.15).toFixed(2)
		: (bill *= 1.1).toFixed(2);
};

let howMuch = tipCalc(123.32, "bad");

console.log(howMuch);
