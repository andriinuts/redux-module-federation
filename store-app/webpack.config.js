const {ModuleFederationPlugin} = require('webpack').container;
const path = require('path');
module.exports = {
    entry: './index.js',
    mode: 'development',
    devtool: 'hidden-source-map',
    output: {
        publicPath: 'http://localhost:3000/',
        clean: true,
    },
    module: {},
    plugins: [
        new ModuleFederationPlugin({
            name: 'store_app',
            filename: 'remoteEntry.js',
            exposes: {
                './store': './src/index.js',
                './counter': './src/counter/index.js',
            },
            shared: ["react-redux"]
        }),
    ],
};
