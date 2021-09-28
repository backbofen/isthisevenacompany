const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/erm', function(req, res){
    res.render('erm.html');
});

app.get('/sql', function(req, res){
    res.render('sql.html')
});

app.get('/transformierung', function(req, res){
    res.render('transformierung.html')
});

app.get('/smodell', function(req, res){
    res.render('smodell.html')
});

app.listen(process.env.PORT || 8080);

console.log('Running at Port 8080');