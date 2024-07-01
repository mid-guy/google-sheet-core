const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
const HotModuleReplacementPlugin =
	require('webpack').HotModuleReplacementPlugin;

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.ts'),
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HotModuleReplacementPlugin(),
		new ModuleFederationPlugin({
			name: 'core_ui',
			library: { type: 'var', name: 'core_ui' },
			remotes: {
				app1: 'app1',
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
				zustand: {
					eager: true, // important
					singleton: true,
				},
			},
		}),
	],
	output: {
		path: path.resolve(__dirname, '..', './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 3000,
		static: {
			directory: path.resolve(__dirname, '..', './dist'),
		},
		hot: false,
		liveReload: true,
	},
};
