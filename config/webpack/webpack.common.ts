const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const { globalSassResource } = require('../constants.js');


const globalCssFileNames = [
  'react-date-range/dist/theme/default.css',
  'react-date-range/dist/styles.css'
]

module.exports = {
  context: process.cwd(),
  entry: {
    main: path.resolve(process.cwd(), 'src/index.tsx'),
  },
  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd ? '[hash:base64:5]' : '[folder]__[local]--[hash:base64:5]',
                auto: (resourcePath: string) => {
                  const isGlobalCssPath = globalCssFileNames.some(globalCssFileName => (
                     resourcePath.includes(globalCssFileName)
                  ))
                  return !isGlobalCssPath
                },
              },

            },
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: globalSassResource
            }
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash:5][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          //If emitting file, the file path is
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: 'svg/[hash:5][ext][query]',
        },
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minesweeper - react',
      template: path.resolve(process.cwd(), './src/template.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/fonts", to: "fonts" },
        { from: "src/images/favicon.png", to: 'images/favicon.png' }
      ]
    })
  ],
};
