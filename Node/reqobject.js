const http = require("http");
const port = 5566;

const navigation = `<nav>
<div>
<span><a href="?page=home"> HOME</a></span>
<span><a href="?page=contact"> CONTACT</a></span>
<span><a href="?page=about"> ABOUT</a></span>
</div>

</nav>
`;

const makeHeading = (page) => {
	let heading = ``;
	switch (page) {
		case "about":
			heading += `<h1>This is about!</h1>`;
			break;
		case "contact":
			heading += `<h1>This is contact</h1>`;
			break;
		default:
			heading += `<h1>This is Home</h1>`;
	}
	return heading;
};

const generateContent = ({ page, navigation, heading, additional, count }) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>My Selection ${page}</title>
		</head>
		<body>
		${navigation}

		${heading}

		The count is ${count || 0}. I hope you are happy

		<ul>
			${additional.join("")}
		</ul>

		<footer>
		copyright2020</footer>
		</body>
	</html>
	`;
};

const server = http.createServer((req, res) => {
	res.writeHead(200);
	//constructing the url object

	const url = new URL(req.headers.host + req.url);

	//if we know what we are looking for we can use get

	let page = url.searchParams.get("page");
	let count = url.searchParams.get("count");

	let additional = [];

	url.searchParams.forEach((v, n) => {
		additional.push(`<li>${n} : ${v} </li>`);
	}); //Not really like a forEach function since its not in Value,index format. Kinda hacky

	let heading = makeHeading(page);

	let wrapper = generateContent({
		page,
		navigation,
		heading,
		count,
		additional,
	});

	res.write(wrapper);
	res.end();
});

server.listen(port, () => {
	console.log(`Running on Port ${port}`);
});
