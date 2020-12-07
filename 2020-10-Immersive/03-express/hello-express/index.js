const http = require('http');
const express = require('express');

const app = express(); // make me a new app!
const server = http.createServer(app);

// app, please listen for GET Requests
// '/' means they're asking for the home page
// the anonymous function will handle the HTTP Request
// and send back the HTTP Response
app.get('/', (req, res) => {
    // req and res are passed to my anonymous function
    // I need to make room for them with placeholders!
    res.send('Hello World!');
});

app.get('/cats', (req, res) => {
    res.send(`
 <ul>   
    <li><a href="/cats/oakley">Oakley</a></li>
    <li><a href="/cats/milla">Milla</a></li>
 </ul>   
    `);
});

// :catName is a route param - an argument that is part of the route path
app.get('/cats/:catName', (req, res) => {
    const catName = req.params.catName;
    res.send(`
        <h1>Welcome to ${catName}'s House!</h1>
        <a href="/cats/">Back</a>
    `);
});

// "turn on the server"
// what port do I listen on (phone extension)
// what is my IP address? (office number)
// a callback that runs after we've started
server.listen(3000, 'localhost', () => {
    console.log('Running on port http://localhost:3000')
});