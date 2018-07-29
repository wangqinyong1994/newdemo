const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ],
    devtool: 'source-map'
}