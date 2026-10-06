const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('First middleware.');
    next();
});

app.use('/', (req, res, next) => {
    console.log('Second middleware.');
    res.send(`<h1>Back-end programming, lab 1</h1>
              <p>Hello from NODE & Express.js! Oto pierwszy serwer.</p>`);
});

const server = http.createServer(app);
server.listen(33333);