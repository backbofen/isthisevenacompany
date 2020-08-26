const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/collections', function(req, res){
    res.render('collections.html');
});

app.get('/shop', function(req, res){
    res.render('shop.html')
});

app.get('/about', function(req, res){
    res.render('about.html')
});

app.listen(process.env.PORT || 8080);

console.log('Running at Port 8080');