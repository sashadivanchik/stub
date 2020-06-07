const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/, 
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                    name: '[name].[ext]',
                },
            },
        ]
    }
}