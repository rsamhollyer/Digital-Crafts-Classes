# BugFixes:

- This script had a few mistakes in it that were causing some problems.

## First Problem:

```javascript
const statesWithAHouston = db.statesWithCity("houston");
console.log("\n\nThere is a Houston in these states:");
//used to be for (const st of statesWithAnAtlanta)
for (const st of statesWithAHouston) {
	console.log(st);
}
```

- The above code has the original error, really a mistake, in the green comment section. Someone had gotten tired and forgot to change the name of the variable to statesWithAHouston. Since the code was only looping through a named array, it just ran the same loop and spat out the cities named 'Atlanta' again. This can be problematic because the code runs just fine, but the expected output is incorrect.

## Second Problem:

```javascript
//used to be: const statesWithATampa = statesWithCity("tampa");
const statesWithATampa = db.statesWithCity("tampa");
```

- This is an actual bug because the code throws a Reference Error when run. The problem exists because the 'db.' is left off the front of the function. That 'db.' refers to a function that is imported/required into the index.js file from the db.js file, which is doing all th heavy lifting on the state.json file.

## Third Problem:

```javascript
//used to be: for (st of statesWithATampa)
	for (const st of statesWithATampa) {

```

- This error occurs because the 'for...of' loop needs a variable assignment key out in front of the 'st'. The code will run, but if there was another 'st' variable in the global score, there could be problems that might go undetected, such as this one. Just be careful when writing your loops.

# Where's DigitalCrafts?

This program displays the states which have cities named "Atlanta", "Houston", "Tampa".

# Bugs to fix

- [ ] After lots of debugging, code stopped running. `node index.js` does nothing
- [ ] Started crashing after adding "tampa" search
- [ ] Prints "Atlanta" locations twice (instead of Houston)

For each bug you fix, add documentation to this README about how you fixed it (include before/after code samples).

# For the more curious:

`db.js` includes more functions that you can try out. In `index.js`, try to `console.log()` the results of the following function calls:

- `getByAbbreviation('ak')`
- `searchByName('dakota')`
  - Why does this only return results for North Dakota (and not South Dakota)?
