require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome E-Health');
})

module.exports = app;