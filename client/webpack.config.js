const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    //'signup': __dirname + '/modules/signup/index.js',
    //'signin': __dirname + '/modules/signin/index.js',
    //'dashboard': __dirname + '/modules/dashboard/index.js',
    'courses': __dirname + '/modules/courses/index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/modules'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      template: 'template.html'
    })
  ]
};
