module.exports = {
	db1: require("./db.js"),
	db2: require("./db2.js"),
};

/* Takeaways for exploring new codebase: 
    --start with a file named app.js, server.js, index.js, main.js. These are usually entry points for the application
-look at require() and module.exports first when exploring a new codebase.

    -find one piece of functionality, locate a function and examine the parameters and return value. Repeat until satisfied.

    --module.exports exports a VALUE not a variable.

    - requrie() is a funcion call, meaning it is replaced with the exported value.

*/
