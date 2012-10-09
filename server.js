var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.sendfile('game.html');
});

app.listen(process.env.port || 3000);