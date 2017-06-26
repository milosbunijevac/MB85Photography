var AWS = require('aws-sdk');
var AWS = require('aws-sdk/global');
var S3 = require('aws-sdk/clients/s3');
var https = require('https');
var Promise = require("bluebird");
var agent = new https.Agent({
  maxSockets: 25
});


AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:0df8e51c-aa9e-4aa9-9b1c-937e2dc484a7',
});
AWS.config.apiVersions = {
  dynamodb: '2011-12-05',
  ec2: '2013-02-01',
  redshift: 'latest'
};
AWS.config.update({
  httpOptions: {
    agent: agent
  }
});

var s3 = new AWS.S3();
var amazonLink = 'https://s3-us-west-2.amazonaws.com/mbimagestore/';
var listparams = {
  Bucket: 'mbimagestore', /* required */
  EncodingType: 'url'
};

var listparams2 = {
  Bucket: 'mbimagestore',
  EncodingType: 'url'
};

let bucketNameLister = function(parameters) {
  return new Promise(function (resolve, reject) {
    s3.listObjects(parameters, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
};

let descriptionGetter = function(parameters) {
  return new Promise(function (resolve, reject) {
    s3.getObject(parameters, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
};

module.exports.s3 = s3;
module.exports.bucketNameLister = bucketNameLister;
module.exports.descriptionGetter = descriptionGetter;
module.exports.listparams = listparams;
module.exports.listparams2 = listparams2;
module.exports.amazonLink = amazonLink;