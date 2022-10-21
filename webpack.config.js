const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_, argv) => ({
  stats: 'minimal',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    static: false,
    client: {
      logging: "warn",
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    port: 1234, host: '0.0.0.0',
    hot: true,
  },
  performance: { hints: false },
  devtool: argv.mode === 'development' ? 'eval-source-map' : undefined,
  optimization: {
    minimize: argv.mode === 'production',
    minimizer: [new TerserPlugin({
      terserOptions: {
        ecma: 6,
        compress: { drop_console: true },
        output: { comments: false, beautify: false },
      },
    })],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'static/' }],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      hash: true,
      minify: false
    })
  ]
});
