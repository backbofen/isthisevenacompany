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

app.listen(process.env.PORT || 8080);

console.log('Running at Port 8080');

var bodyParser = require('body-parser');

app.use(bodyParser.json() );

app.post('/id', function(req, res) {

    var data = req.body;
    var id = data.id;

    var query = "SELECT * FROM Control WHERE id=" + id;
    connection.query(query, function(error, result) {
        console.log(result);
        res.send(result);
    });

});