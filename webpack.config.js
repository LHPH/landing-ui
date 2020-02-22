const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname,'/build'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/, 
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            base: '/landings'
        }),
        new MiniCSSExtractPlugin({
            filename: 'estilos.css'
        })
    ]
}//https://github.com/babel/babel/issues/6808