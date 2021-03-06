var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '/client/src/', 'index.js'),
  output: ({path: path.join(__dirname + '/client'), filename: 'bundle.js'}),
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};