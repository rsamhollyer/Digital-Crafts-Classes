//1
vehicles = [
	{ name: "thing 1", speed: 100, passengers: 200 },
	{ name: "thing 2", speed: 200, passengers: 400 },
	{ name: "thing 3", speed: 400, passengers: 800 },
];

let vehicleArray = vehicles.map((vehicle) => vehicle.name);
// console.log(vehicleArray);

//2
todoItems = [
	{ id: 1, status: "complete", items: "scratch head" },
	{ id: 2, status: "WIP", items: "Climbing" },
	{ id: 3, status: "WIP", items: "wash hair" },
	{ id: 4, status: "todo", items: "clip dog toenail" },
	{ id: 5, status: "complete", items: "cook" },
	{ id: 6, status: "todo", items: "clean car" },
];

let status = todoItems.map((todos) => todos.status);

let condensedTodos = [...new Set(todoItems.map((todo) => todo.status))];

let result = [];
condensedTodos.forEach((stat) => {
	let newObj = {};
	newObj.stat = stat;
	result.push(newObj);
});

result.forEach((stat) => {
	stat.item = [];
	todoItems.forEach((todo) => {
		if (stat.stat === todo.status) {
			stat.item.push(todo.items);
		}
	});
});
console.log(result);
