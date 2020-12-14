const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

// Here is my "database"
const db = [];

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1><br><a href="/new">Go to the form</a>`)
});


// Show the form when they send me a GET request
// 1. add method="POST" to your <form> tag
// 2. label each input with a name attribute
// 3. put a <input type="submit">
app.get('/new', (req, res) => {
    res.send(`
<h1>Say something!</h1>
<form method="POST">
  <label>
    Street
    <input name="street" type="text" autofocus />
  </label>
  <br>
  <label>
    City
    <input name="city" type="text" />
  </label>
  <br />
  <input type="submit" value="do it!" />
</form>
    `);
});

// Receive the POST request that contains data from the form!
app.post('/new', (req, res) => {
    console.log(req.body);
    // req.body contains the data sent in the form
    const { street, city } = req.body; // destructuring
    // const street = req.body.street;
    // const city = req.body.city;
    // const thought = req.body.thought
    db.push({ street, city }); // saving it to the "database"
    // db.push({
    //   street, 
    //   city
    // })
    res.redirect('/list'); // redirect!
    // We tell the browser to send us another GET request
    // for `/list`
});

app.get('/list', (req, res) => {
    console.log(db);
    res.send(`
<a href="/new">Go to the form</a>
<ul>
  ${
    db.map(o => `<li>${o.street} ${o.city}</li>`).join('')
  }
</ul>
    `);
});

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
