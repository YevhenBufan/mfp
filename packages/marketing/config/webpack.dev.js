const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const { ModuleFederationPlugin } = require("webpack").container;
import packageJson from "../package.json";

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, devConfig)