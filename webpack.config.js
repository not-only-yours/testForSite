const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports= {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist'
    },
    module:{
      rules:[{
       test: /\.js/,
        loader: 'babel-loader',
          exclude: '/node_modules/'
      },{
          test: /\.css$/,
          use: [
              MiniCssExtractPlugin.loader, // instead of style-loader
              'css-loader'
          ]
      }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        overlay: true
    }
}