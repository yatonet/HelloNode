var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send(200, 'Hello, Node');
});


console.log('Hello, Node');
app.listen(9999);
