var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'kdu-toasted.min.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.kdu$/,
				loader: 'kdu-loader',
				options: {
					loaders: {
						'scss': 'kdu-style-loader!css-loader!postcss-loader!sass-loader',
						'sass': 'kdu-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
					}
					// other kdu-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'kdu$': 'kdu/dist/kdu.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'

	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: { warnings: false },
			comments: false,
		}),
		new webpack.ProvidePlugin({}),
		// new BundleAnalyzerPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
