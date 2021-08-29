module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: [
                    'url-loader',
                ],
            },
        ]
    }
};
