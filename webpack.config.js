/* eslint-env node */
const path = require('path');

module.exports = {
  // Use path.join para evitar problemas com o Windows
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // {modules:false} é a parte crucial para ativar o tree-shaking
            options: {presets: [['es2015', {modules: false}]]},
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader'}],
      },
    ],
  },
};
