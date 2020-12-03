const person = {
	name: "Oakley",
	hobby: "napping",
};

console.table(person);

const copyOfPerson = {
	// name: person.name,
	// hobby: person.hobby
	...person,
	superpower: "eating",
	name: "MILLA!!!!!",
	name: "Chris",
};
console.table(copyOfPerson);

/*
.post_title {
    padding: 40px;
    padding: 30px;
    
    The bottom will overwrite the top
}
*/

function mySpreadOp(obj) {
	const newObj = {};
	const keys = Object.keys(obj);

	for (let k of keys) {
		const val = obj[k];
		newObj[k] = val;
	}
	return newObj;
}
//console.table(copyOfPerson);
const anotherCopy = mySpreadOp(person);
//console.table(anotherCopy);
