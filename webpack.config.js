const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.join(__dirname,'/build'),
        filename: 'index_bundle.js',
        publicPath: '/'
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                   'file-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            base: '/landings'
        }),
        new MiniCSSExtractPlugin({
            filename: 'styles_bundle.css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }),
        new Dotenv({path:`./.env.${isDevelopment !== "production" ? "dev" : "prod"}`})
    ]
}//https://github.com/babel/babel/issues/6808
//https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/