const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require('../package.json');

const devConfig = {
    mode: "development",
    output: {
        publicPath: 'http://localhost:8082/',
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, devConfig)