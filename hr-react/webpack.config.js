const { resolve } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode === 'production' ? true : false;
const WebpackBar = require('webpackbar');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackBaseConfig = {
  entry: {
    main: resolve('src/web/index.tsx'),
  },
  output: {
    path: resolve(process.cwd(), 'dist'),
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        include: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 3,
      cacheGroups: {},
    },
  },
  resolve: {
    // fallback: { url: false, os: false },
    alias: {
      '@components': resolve('src/web/components'),
      '@hooks': resolve('src/web/hooks'),
      '@pages': resolve('src/web/pages'),
      '@layouts': resolve('src/web/layouts'),
      '@assets': resolve('src/web/assets'),
      '@states': resolve('src/web/states'),
      '@service': resolve('src/web/service'),
      '@utils': resolve('src/web/utils'),
      '@lib': resolve('src/web/lib'),
      '@constants': resolve('src/web/constants'),
    },
    extensions: ['.js', '.ts', '.tsx', 'jsx', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
      chunkFilename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new Dotenv(),
  ],
};
module.exports = merge.default(webpackBaseConfig, _mergeConfig);
