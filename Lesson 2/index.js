console.log ("starting server");

var express = require('express');
var app = express();

app.use(express.static('contents'));
app.listen(80);
console.log ("started server");