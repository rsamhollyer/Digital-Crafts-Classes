//1
let numbers = [1, 2, 3, 4];
let [a, b, c, d] = numbers;
let [, second, ,] = numbers;
let [first, ...rest] = numbers;

//2
ship = {
	name: "Green Monkey",
	age: 120,
	speed: 15,
	accel: 9,
};

// const { name, age } = ship;
// const { accel } = ship;
// const { speed } = ship;
const { age: ship_age, speed: ship_speed } = ship;

console.log(ship_age);
