# exercise!

Your goal is to create a (probably ugly, because it's not styled) "fan page" for something you like.

You'll need to create a new project directory, and in it:

- `npm init -y`
- `npm install express`
- `npm install --save-dev nodemon`
- create an index.js
- add a nodemon script to your `package.json`

Your express app should handle three kinds of routes:

- `/` - Home page
- `/movies` - list out 3 individual titles
- `/movies/:movieName` - page for individual movie

Please hard-code the HTML, if you need something like links.