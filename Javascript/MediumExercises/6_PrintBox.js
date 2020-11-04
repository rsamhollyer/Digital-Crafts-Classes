const box = function (width, height) {
	let boxTop = [];
	do {
		boxTop.push("-");
	} while (boxTop.length < width / 2);

	console.log("", boxTop.join(" "));
	let i = 0;
	do {
		let str = "|";
		boxTop.forEach((char) => (str = str.concat(" ")));
		str = str.concat("    |");
		console.log(str);
		i++;
	} while (i < height / 2);
	console.log("", boxTop.join(" "));
};

let test = box(5, 5);
