const http = require('http');
const express = require('express');

const app = express(); // make me a new app!
const server = http.createServer(app);

app.get('/', (req, res) => {
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

server.listen(5000, 'localhost', () => {
    console.log('Running on port http://localhost:5000')
});