'use strict';
var path = require('path');

module.exports = {
  entry: {
    class: './src/class/index.js',
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
};
