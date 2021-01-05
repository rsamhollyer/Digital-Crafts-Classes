

## Coin flip (command line app)

Create a Node.js program that will print one of two strings:

- "heads"
- "tails"

Like flipping a coin, there should be a 50% chance that it prints "heads" and a 50% chance that it prints "tails".

[This MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) describes how to use the `Math.random()` function to generate a random number between 0 and some maximum value. (Hint: check if the result is in the upper or lower half of the range of possible values.)

Alternatively, the [chance.js module has a .bool() function](https://chancejs.com/basics/bool.html) that will do the calculation for you.


## Coin flip (express app)

Create an express app that with a `/` route.

This route has a 50% chance it will `res.send()` the HTML string `<h1>Heads</h1>` and a 50% chance it will `res.send()` the HTML string `<h1>Tails</h1>`.

Follow the advice from the "coin flip" small exercise to simulate a 50% chance of getting heads or tails.

### Coin flip (express apps with three routes)

Modify your app so that it uses templates for these two routes:

- `/heads` - shows `<h1>Heads</h1>`
- `/tails` - shows `<h1>Tails</h1>`

Change the `/` route so that there is a 50% chance it will `res.redirect()` to the `/heads` route or the `/tails` route.
