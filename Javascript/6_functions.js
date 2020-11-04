//1
function addStuff(x, y, z) {
	// let results = x + y + z;
	// return results;
	return x + y + z;
}

console.log(addStuff(1, 2, 3));

//2
function doingSomethingCrazy(func, number) {
	let i = 0;
	do {
		console.log(i);
		i++;
	} while (i <= number);
	func(i);
}

doingSomethingCrazy((num) => {
	console.log("WHY AM I THIS!", num);
}, 10);

doingSomethingCrazy((num) => {
	console.log("DIE ANGRY!", num);
}, 12);
