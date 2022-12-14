const path = require('path');
// import path from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin'
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// import { CleanWebpackPlugin } from 'clean-webpack-plugin'
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(process.cwd(), './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
}