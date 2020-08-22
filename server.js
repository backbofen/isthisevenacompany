const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index.html');
});
//add the router 
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');