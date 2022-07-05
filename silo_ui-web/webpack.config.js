const path = require('path');
const platform = 'browser';
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    resolve: {
        // e.g. prefer 'something.browser.js' over something.js
        extensions: [`.${platform}.js`, `.${platform}.mjs`, '.browser.js', '.browser.mjs', '.js', '.mjs', '.json'],
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
        port: 3000,
    },
};
