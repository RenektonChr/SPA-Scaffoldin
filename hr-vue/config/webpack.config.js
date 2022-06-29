const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EsLinterPlugin = require('eslint-webpack-plugin');

console.log('NODE_ENV---->', process.env.NODE_ENV);
// 是否为开发环境
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  target: 'web',
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name][hash:6].js",
  },
  module: {
    rules: [
      // 编译es6
      {
        test: /\.m?js$/,
        use: "babel-loader",
      },
      // 解析less
      {
        test: /\.less$/,
        use: [
          isDev? "style-loader": MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          "postcss-loader",
        ]
      },
      // 解析sass
      {
        test: /\.s[ac]ss$/,
        use: [
          isDev? "style-loader": MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ]
      },
      // 解析css
      {
        test: /\.css$/,
        use: [
          isDev? "style-loader": MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ]
      },
      // 解析图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          }
        },
        generator: {
          // 基于output.path
          filename: "./assets/img/[name][hash:6][ext]",
        }
      },
      // 解析字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][hash:6][ext]"
        }
      },
      // 解析.vue文件
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, "../public"),
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,   // SPA
    proxy: {
      "^/api": {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist/public"),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name]-[hash:6].css",
    }),
    new EsLinterPlugin({
      // fix: true, /* 自动帮助修复 */
      extensions: ['js', 'json', 'coffee', 'vue'],
      exclude: 'node_modules'
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".vue", ".json", ".jsx", ".wsm", ".ts", ".tsx"],
  }
}