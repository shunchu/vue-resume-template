const path = require('path')
const utils = require('./utils')
const config = require('../config')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].[contenthash:8].js',
    publicPath: 'auto', // Webpack 5 default, usually better than manual paths
    assetModuleFilename: utils.assetsPath('media/[name].[hash:8][ext][query]'),
    clean: process.env.NODE_ENV === 'production', // Clean the output directory before build (only in production)
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm-bundler.js', // Use ESM bundler build for Vue 3
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // Consider adding ESLint loader
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset', // Webpack 5 Asset Modules
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // Inline images smaller than 10kb
          }
        },
        generator: {
          filename: utils.assetsPath('img/[name].[hash:8][ext][query]') // Output path for images
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource', // Always emit as separate file
        generator: {
          filename: utils.assetsPath('media/[name].[hash:8][ext][query]') // Output path for media
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource', // Always emit as separate file
        generator: {
          filename: utils.assetsPath('fonts/[name].[hash:8][ext][query]') // Output path for fonts
        }
      }
    ]
  },
}
