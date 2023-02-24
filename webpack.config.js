const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    inputUI: './src/input.ui.js',
    outputUI: './src/output.ui.js',
    bridgedUI: './src/UI.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cuaca menggunakan API Open Weather',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src/assets/images'),
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/i,
        include: path.resolve(__dirname, 'src/assets/fonts'),
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
          },
        },
      },
    ],
  },
};