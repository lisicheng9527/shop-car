var path = require('path');

module.exports = {
	entry: path.join(__dirname,'src/index.js'),
	output: {
		path: path.join(__dirname,'build'),
		filename: 'bundle.js'
	},
	module: {
     rules: [{
         test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     },
		 {
			 test: /\.css$/,
			 use: ['style-loader','css-loader?importLoaders=1']
		 }
	 ]
    }
}
