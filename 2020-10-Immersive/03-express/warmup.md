### 1. Two functions

Write two functions that `console.log()` like so:
```js
hey();
// "hello"!

hush();
// "shhhhh"
```

### 2. Even or Odd?

The goal is to write a function that behaves like this:

```js
getNumbers(arr, "even");
// [2, 4, 6, 8, 10]

getNumbers(arr, "odd");
// [1, 3, 5, 7, 9]
```

Create a variable for this Array:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Write a function that accepts an Array of numbers and a String.

If the value of the String is `"even"`, return the even numbers from the Array.

If the value is `"odd"`, return the odd numbers.


### 3. Call me, maybe

Using the two functions from warmup #1, write a function that behaves like this:

```js
callMeMaybe(1, hey, hush);
// "hello"

callMeMaybe(4, hey, hush);
// "shhhhh"
```

Define a function named `callMeMaybe()` that expects to receive 3 arguments: a Number, a function, and another function.

If the Number argument is odd, call the first function.

If the Number argument is even, call the second function.