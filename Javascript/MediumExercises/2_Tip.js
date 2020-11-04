const tipCalc = function (bill, service) {
	return service === "good"
		? bill * 0.2
		: service === "fair"
		? bill * 0.15
		: bill * 0.1;
};

let howMuch = tipCalc(100, "bad");

console.log(howMuch);
