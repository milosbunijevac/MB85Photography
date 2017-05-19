var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var awser = require('./aws');

var listparams = {
  Bucket: 'mbimagestore', /* required */
  EncodingType: 'url'
};
awser.objectLister;