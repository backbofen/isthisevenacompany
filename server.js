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

app.post('/geta', (req, res) => {
    console.log("i'm taked");
    setTimeout(()=>{
      console.log('Get imagesURL successful');
      res.send("hellp");
    },2000)
  })
