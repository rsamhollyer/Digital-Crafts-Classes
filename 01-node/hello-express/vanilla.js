const http = require("http");

const hostname = "localhost";
const port = 3000;

/*

Goal: A website with 3 ugly pages
1. Homepage
2. list of cats
3. individual cats
*/
const server = http.createServer((req, res) => {
	console.log(`They are asking for ${req.url}`);

	if (req.url == "/") {
		console.log(`They want the home page`);

		//200 means Request Okay and Response Okay.
		res.statusCode = 200;

		//Headers do not appear in the browser, but are used by the browser.
		//You set headers to tell the browser whats in the "package"(the Response)
		res.setHeader("Content-Type", "text/plain");
		res.write("Does Chris know vanila node?");
		res.write("Probably not!......=P");
		//.end() tells Node to send the Reponse. (Shipit)
		res.end("This is the Home Page");
		// res.write("Error?"); This won't run after you .end() and throws an error
	} else if (req.url === "/cats") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("MEOW!!");
	} else {
		//404 means we do not have that page
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain"); //This is a 'package label'. They  tell the browser what's in the box
		res.end("PAGE NOT FOUND");
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
