const { merge } = require('webpack-merge');
const common = require('./webpack.common.ts');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[chunkhash].css',
    }),
    new CssoWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
      DOMAIN: '',
      CLIENT_ID: '',
      MCKO_AUTH_SERVER: '',
    }),
    new BundleAnalyzerPlugin({ analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled' }),
  ],
});
