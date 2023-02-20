const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cuaca',
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
    ],
  },
};