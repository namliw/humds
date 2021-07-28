import path from 'path';
import { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

const config: Configuration = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
    }),
    new VanillaExtractPlugin(),
  ],
};

export default config;
