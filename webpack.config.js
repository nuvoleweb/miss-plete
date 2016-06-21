var webpack = require("webpack");

module.exports = {
  entry: ['./src/MissPlete.js'],
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    libraryTarget: 'var',
    library: "MissPlete"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  }
  // devtool: 'source-map'
};
