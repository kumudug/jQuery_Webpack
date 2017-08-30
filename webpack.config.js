const path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'app': './main'
    },
    devServer: {
        contentBase: './'
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        publicPath: 'http://localhost:8080/js/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$'
                },
                {
                    loader: 'expose-loader',
                    options: 'jQuery'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.js'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            jQuery: 'jquery',
            $: 'jquery'            
        })
    ]
}