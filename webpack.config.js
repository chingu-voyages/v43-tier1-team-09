const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "source-map",
});