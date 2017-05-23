//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    //index对应output的[name] "这里是URL"
    index: "./src/entry/index.js",
  },
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel?presets[]=es2015&presets[]=react',
        exclude: /node_modules/
      },
      { test: /\.css$/, 
        loader: 'style!css',
        exclude: /node_modules/
      },
    ]
  }
}