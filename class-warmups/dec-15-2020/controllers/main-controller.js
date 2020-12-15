const layouts = {
	partials: {
		head: "/partials/header",
		foot: "/partials/footer",
	},
};

const home = (req, res) => {
	res.render("index", {
		...layouts,
	});
};

module.exports = { home };
