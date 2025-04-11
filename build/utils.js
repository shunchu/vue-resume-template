var path = require('path')
var config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  const subdir = assetsSubDirectory || 'static'
  return path.posix.join(subdir, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader, postcssLoader]

    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: {
          ...(loaderOptions || {}),
          sourceMap: options.sourceMap
        }
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        },
        ...loaders
      ]
    } else {
      // In development, vue-style-loader handles HMR
      return ['vue-style-loader', ...loaders]
    }
  }

  // https://vue-loader.vuejs.org/guide/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(), // Reuse generateLoaders, PostCSS is now included
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { sassOptions: { indentedSyntax: true } }), // Use sassOptions
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    // For non-vue files, use style-loader in dev, extract in prod
    const use = options.extract
      ? loader
      : ['style-loader', ...(loader.slice(1))] // Replace vue-style-loader with style-loader

    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: use
    })
  }
  return output
}
