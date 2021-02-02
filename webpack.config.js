const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CheckerPlugin} = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'production',
  entry:{
    index:'./lib/index.tsx'
  },
  output:{
    path: path.resolve(__dirname, './dist/lib'),
    library:'yCoffee',//全局变量使用yCoffee
    libraryTarget:'umd',// 使用umd格式 兼容两种 common.js和amd
    filename: '[name].js', // 加上[hash] 并且做了code splitting 那么就可以做浏览器缓存了
    chunkFilename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })

  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      stylesheets: path.resolve(__dirname, 'stylesheets'),
      examples: path.resolve(__dirname, 'examples'),
      lib: path.resolve(__dirname, 'lib'),
    },
    // 针对Npm中第三方模块优先采用 jsnext:main 中指向的 ES6模块化语法
    mainFields: ['jsnext:main', 'browser','main']
  },
  module:{
    rules:[
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: 'url-loader', // 开启缓存 没有改过的ES6 语法就不再编译
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            //小于 5kb 就走 url-loader 使用base64的形式
            // 否则就走file-loader 产出url的形式
            limit: 5 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
}
