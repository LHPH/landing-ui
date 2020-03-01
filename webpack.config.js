const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

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
                use:[
                    {loader: MiniCSSExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
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
            filename: 'estilos.css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        })
    ]
}//https://github.com/babel/babel/issues/6808
//https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/