var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var axios = require('axios');
var awsget = require('./aws');
var request = require('request');
var fs = require('fs');

var port = process.env.PORT || 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client'));
app.use(express.static('client/dist'));
app.use(express.static('css'));
app.use(express.static('fonts'));
app.use(express.static('js'));
app.use(express.static('font-awesome-4.7.0'));
app.use(express.static('images'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
});

app.post('/modelindiv', function(req, res) {
  awsget.bucketNameLister(awsget.listparams2, function(err, data) {
    console.log(data);
    if (err) {
      console.log(err, null);
    }
    var name = req.body.model;
    var arrayindiv = [];
    data.Contents.forEach(function(value) {
      if (value.Size > 200000 && value.Key.includes(req.body.model)) {
        arrayindiv.push({name: req.body.model, imageUrls: 'https://s3-us-west-2.amazonaws.com/mbimagestore/' + value.Key});
      }
    });
    res.status(200);
    res.send(arrayindiv);
  });
});

app.post('/modelcall', function(req, res) {
  awsget.bucketNameLister(awsget.listparams, function(err, data) {
    if (err) {
      console.log(err, null);
    }
    var folderName;
    var arrayforMap = [];
    var modelLink;
    data.Contents.forEach(function(value) {
      if (value.Size === 0) {
        folderName = value.Key.split('+').join(' ').replace(/\/$/, '');
      }
      if (value.Size === 0) {
        modelLink = value.Key.replace('+', '%20');
      }
      if ( value.Key.includes('Thumb')) {
        arrayforMap.push({name: folderName, imageUrl: awsget.amazonLink + value.Key, linkUrl: modelLink});
      }
    });
    
    //arrayforMap exists here
    res.status(200);
    res.send(arrayforMap);

  });

});

app.listen(port, function() {
  console.log('The server is listening on port: ' + port);
});