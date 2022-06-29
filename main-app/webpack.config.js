const {ModuleFederationPlugin} = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies
module.exports = {
    entry: './index.js',
    mode: 'development',
    devtool: 'hidden-source-map',
    output: {
        publicPath: 'http://localhost:3002/',
        clean: true,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css', '.scss', '.jpg', 'jpeg', 'png'],
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'main_app',
            remotes: {
                'store-app': 'store_app@http://localhost:3000/remoteEntry.js',
                'component-app': 'component_app@http://localhost:3001/remoteEntry.js',
            },
            shared: {
                react: {
                    singleton: true,
                    version: deps['react']
                },
                'react-dom': {
                    singleton: true,
                    version: deps['react-dom']
                },
                'react-redux': {
                    singleton: true,
                    version: deps['react-redux']
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
