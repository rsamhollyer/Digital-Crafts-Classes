//1

todoItems = [
	{
		id: 1,
		status: "complete",
		items: "scratch head",
		deadline: new Date("11/09/2020"),
	},
	{
		id: 2,
		status: "WIP",
		items: "Climbing",
		deadline: new Date("11/09/2020"),
	},
	{
		id: 3,
		status: "WIP",
		items: "wash hair",
		deadline: new Date("11/09/2020"),
	},
	{
		id: 4,
		status: "todo",
		items: "clip dog toenail",
		deadline: new Date("11/09/2020"),
	},
	{
		id: 5,
		status: "complete",
		items: "cook",
		deadline: new Date("11/09/2020"),
	},
	{
		id: 6,
		status: "todo",
		items: "clean car",
		deadline: new Date("11/05/2020"),
	},
];
// let completedItems = todoItems.filter((item) => item.status === "complete");
// console.log(completedItems);

let pastDueItems = todoItems
	.filter((item) => item.status === "todo")
	.sort((a, b) => a.deadline - b.deadline)
	.find((late) => late.deadline < new Date());
console.log(pastDueItems);

// let findTodoItems = todoItems.filter((todo) => todo.status === "todo");
// console.log(findTodoItems);
