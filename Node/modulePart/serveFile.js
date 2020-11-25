const fs = require("fs");

const serveFile = (req, res, fileName) => {
	fs.readFile("." + fileName, (err, data) => {
		if (err) {
			res.writeHead(404);
			return res.end();
		}
		res.write(data);
		res.end();
	});
};

module.exports = serveFile;
