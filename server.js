const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + 'public/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname + 'public/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname + 'public/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');