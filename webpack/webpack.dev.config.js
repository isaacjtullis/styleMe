var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' } // use ! to chain loaders
		]
	},
	devServer: {
    contentBase: parentDir,
    historyApiFallback: true
	}
}