const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/term', function(req, res){
    res.render('term.html');
});

app.get('/tsql', function(req, res){
    res.render('tsql.html')
});

app.get('/ttransformierung', function(req, res){
    res.render('ttransformierung.html')
});

app.get('/tsmodell', function(req, res){
    res.render('tsmodell.html')
});

app.get('/earne', function(req, res){
    res.render('earne.html')
});

app.get('/emicha', function(req, res){
    res.render('emicha.html')
});

app.get('/teklausuren', function(req, res){
    res.render('teklausuren.html')
});

app.get('/teleks', function(req, res){
    res.render('teleks.html')
});

app.get('/umontag', function(req, res){
    res.render('umontag.html')
});

app.listen(process.env.PORT || 8080);

console.log('Running at Port 8080');