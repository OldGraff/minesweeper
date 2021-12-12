const { merge } = require('webpack-merge');
const common = require('./webpack.common.ts');

const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new ESLintPlugin(),
    new webpack.WatchIgnorePlugin({ paths: [/scss\.d\.ts$/, /(test|snap)\.(ts|tsx)$/] }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DOMAIN: '',
      CLIENT_ID: '',
      MCKO_AUTH_SERVER: '',
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // host: 'localhost.pred-prof.com',
    // port: 8080,
    https: true,
    contentBase: './dist',
    clientLogLevel: 'silent',
    historyApiFallback: true,
  },
});
