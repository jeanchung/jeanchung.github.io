const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './react/main.jsx',
  output: {
    path: __dirname,
    filename: './index.js',
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2'],
          },
        }],
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer,
                ],
              },
            },
            'sass-loader',
          ],
        }),
      }, {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?emitFile=false&name=[path][name].[ext]',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],
};
