var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015'] } }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' }
    ])
  ]
};
