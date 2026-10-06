const express = require('express');
const router = express.Router();

router.get('/info', (req, res, next) => {
    res.send('<h1>We are now at the \"Information\" page.</h1>');
});

router.get('/', (req, res, next) => {
    res.send(`<h1>Back-end programming, lab 1</h1>
              <p>Hello from NODE & Express.js! Oto pierwszy serwer.</p>`);
});

module.exports = router;