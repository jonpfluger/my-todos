const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
      ]
    }
  };
};
