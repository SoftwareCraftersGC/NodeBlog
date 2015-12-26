var express = require('express');

var app = express();

app.get('/', (req, res) => res.send('hello world'));

app.listen(5000, () => console.log("running"));
