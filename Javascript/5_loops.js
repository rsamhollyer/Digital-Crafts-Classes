//1
// let i = 1;
// let number = 0;

// while (i <= 10) {
// 	number += i;
// 	i++;
// 	console.log(number);
// }

//2
// for (let i = 0; i <= 100; i += 2) {
// 	console.log(i);
// }

//3
// let number = 100;
// for (let i = 6; i >= 2; i--) {
// 	number /= i;
// 	console.log(number);
// }

//4

function countDown(iterations) {
	let i = iterations;
	let results = 0;
	do {
		i % 2 === 0 && i % 3 === 0 ? (results += i) : results;
		i--;
		if (i === 0) return results;
	} while (i > 0);
}

let resultingSums = countDown(2200);
console.log(resultingSums);
