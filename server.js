const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/earne', function(req, res){
    res.render('earne.html')
});

console.log('Running at Port 8080');

var bodyParser = require('body-parser');
app.use(bodyParser.json() );

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/id', function(req, res, next){
    var data = req.body;
    console.log(data); // req.body contains the parsed body of the request.

});

app.listen(process.env.PORT || 8080);