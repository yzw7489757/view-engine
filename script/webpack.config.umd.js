const path = require('path');
const baseConfig = require('./webpack.config.base');
const { name } = require('../package.json');

module.exports = {
  ...baseConfig, 

  mode: process.env.BUILD_ENV ? 'production' : 'none',

  entry: {
    index: path.resolve(__dirname, '../src/index.tsx')
  },

  devtool: 'source-map',

  output: {
    library: name,
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib')
  },
}