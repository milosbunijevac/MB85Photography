var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static('client'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
});

app.listen(port, function() {
  console.log('The server is listening on port: ' + port);
});