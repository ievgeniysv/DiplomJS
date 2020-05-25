let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let copyWebpackWplugin = require('copy-webpack-plugin');
//let ImageminPlugin = require('imagemin-webpack-plugin').default;


let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/[name].bundle.js',
    chunkFilename: 'assets/js/[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    overlay: true,
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new copyWebpackWplugin([
      // {from: 'src/assets/icon', to: 'assets/icon'},
      {from: 'src/assets/fonts', to: 'assets/fonts'},
    ]),
    //new ImageminPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {sourceMap: true,},
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },

        ],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },
    ]
  }
};

module.exports = conf;