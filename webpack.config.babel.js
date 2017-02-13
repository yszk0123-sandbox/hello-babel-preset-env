'use strict';
var path = require('path');

module.exports = {
  entry: {
    class: './src/class/index.js',
    // runtime: './src/runtime/index.js',
    // import: './src/import/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      'node_modules',
    ],
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
    }]
  }
};
