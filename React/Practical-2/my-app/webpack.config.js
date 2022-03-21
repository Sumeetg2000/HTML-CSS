const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path:path.join(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src','index.html')
        })
    ]
}