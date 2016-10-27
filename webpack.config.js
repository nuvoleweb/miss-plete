var webpack = require("webpack");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/MissPlete.js'
  ],
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
        query: {
          presets: ['es2015'],
          plugins: [
            'transform-object-assign'
          ]
        }
      }
    ]
  }
  // devtool: 'source-map'
};
