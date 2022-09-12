const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();


const router = require('./apis');

app.get('/', (req, res) => {
    res.send({
        message: 'aló'
    })
})

app.use(express.json());
app.use(router);

module.exports = app