var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', function(req, res){
  
});

app.listen(3100);