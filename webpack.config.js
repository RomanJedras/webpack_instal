const path = require('path');
let name = '';

module.exports = (env) => {
	const environment = env || 'development';
	
	switch (environment) {
		case 'development':
			name = 'start';
		break;
		case "production":
		default :
			name = 'build';
	}
	
	return {
		mode: environment,
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: name+'.' + environment + '.bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader"
				},
				{
					test: /\.css$/,
					use: [
						{loader: 'style-loader'},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				},
				{
					test: /\.scss$/,
					use: [ 'style-loader', 'css-loader', 'sass-loader' ]
					
				}
			]
		}
	}
}
