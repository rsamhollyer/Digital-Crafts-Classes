const todaysDate = () => {
	let today = new Date();
	let day = today.getDate();
	let month = today.getMonth();
	let year = today.getFullYear();
	let date = `${month}/${day}/${year}`;
	return date;
};
// console.log(todaysDate());
module.exports = todaysDate;
