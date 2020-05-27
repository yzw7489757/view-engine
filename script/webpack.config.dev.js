const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const { resolve } = require('path')

module.exports = {
  ...baseConfig,
  mode: 'development',
  entry: {
    local_index: resolve(__dirname, '../demo/index.tsx'),
    index: resolve(__dirname, '../src/index.tsx')
  },
  devServer: {
    disableHostCheck: true,
    contentBase: resolve(__dirname, '../demo'),
    https: !!process.env.HTTPS,
    port: 8888,
    host: '0.0.0.0',
    stats: 'minimal',
    hot: true,
    inline: true
  },
  devtool: 'cheap-module-eval-source-map'
}