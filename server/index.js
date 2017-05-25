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

app.post('/modelcall', function(req, res) {
  awsget.bucketNameLister(awsget.listparams, function(err, data) {
    if (err) {
      console.log(err, null);
    }
    var arrayNames = [];
    var thumbObjs = {};
    var folderName;
    var arrayforMap = [];
    var descs = [];
    data.Contents.forEach(function(value) {
      var keyspacer;
      if (value.Key.includes('descriptor')) {
        console.log(value.Key, ' this is the value.key');
        if (value.Key.includes('+')) {
          keyspacer = value.Key.split('+').join(' ');
          console.log('the key spacer is :' + keyspacer);
        } else {
          keyspacer = value.Key;
        }
        awsget.s3.getObject({ Bucket: 'mbimagestore', Key: keyspacer }, function(err, data) {
          if (err) {
            console.log(err, ' this is the error in the getObject');
          }
          console.log(data.Body.toString(), ' this is the data from the getobject');
        });
      }
      // if (value.Size === 0) {
      //   //Gets Name of person from Folder name
      //   folderName = value.Key.split('+').join(' ').replace(/\/$/, '');
      //   arrayNames.push(folderName);
      // }
      // if ( value.Key.includes('Thumb')) {
      //   arrayforMap.push({name: folderName, imageUrl: awsget.amazonLink + value.Key});
      // }

    });
    res.status(200);
    // res.send(arrayforMap);
  });
});

app.listen(port, function() {
  console.log('The server is listening on port: ' + port);
});