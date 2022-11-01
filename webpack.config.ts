import webpack from 'webpack';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

module.exports = (_: unknown, argv: { mode: string }) => ({
  entry: './src/main.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    compress: true,
    static: false,
    client: {
      logging: 'warn',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    port: 3000,
    hot: true,
  },
  mode: argv.mode == "production" ? "production" : "development",
  devtool: argv.mode === 'development' ? 'inline-source-map' : undefined,
  optimization: {
    minimize: argv.mode === 'production',
    minimizer: [new TerserPlugin({
      terserOptions: {
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
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
    }),
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
