//Why do I not need the .js at the end?
// What's up with the ./?

// const users = require("./db");
const peep = require("./db");
//If db is a directory, node looks for db/index.js and ONLY index.js

//Declare varaible on LHS. RHS calls require fnc and pass it the path to db.js file. Node is okay if you leave off .js

//Do I have to use the same name as the bariable in db.js?
//Nope! The varaible on the LHS does NOT have to match. Name as you like

console.table(peep);
