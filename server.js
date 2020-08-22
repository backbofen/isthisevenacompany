var express = require('express');
var app = express();
var path = require('path');
// set port
var port = process.env.PORT || 8080

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/test.html"));
});

app.listen(port, function() {
    console.log("app running on port " + port);
}) 