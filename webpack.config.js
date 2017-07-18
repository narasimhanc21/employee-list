const port = process.env.PORT || 3030;
const path = require('path');
const webpack = require('webpack');

/**
* Webpack configuration file
* Reads from src/main.js and creates app.bundle.js in minified form in the public folder
* Two loaders are applied babel-loader for ES6 and json loader for reading json files
*/

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
	  app:'./main.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '/public'
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, './src'),
    port: port
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
	  { 
		test: /\.json$/, 
	    loader: 'json-loader' 
	  }
    ]
  }
};
