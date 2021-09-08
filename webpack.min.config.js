const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '/src'),
        },
        compress: true,
        port: 8080,
    },
    output: {
        path: `${__dirname}/public/min`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: ['url-loader',],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index_min.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/img", to: "img" },
            ],
        }),
    ],
};
