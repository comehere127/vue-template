'use strict'
const path = require('path')
const pkg = require('./package.json')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = pkg.name
const port = 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist/' + (process.env.ENV === 'dev' ? 'development' : process.env.ENV),
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    output: {
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].js'
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('js').uses.delete('cache-loader')
    const { API_BASE_URL, GT_CORE, STATIC_PATH_LOCAL, STATIC_PATH, DEBUG } = process.env
    config.module
      .rule('replaceString')
      .test(/\.(js|vue)$/)
      .use('string-replace-loader')
      .loader('string-replace-loader')
      .options({
        multiple: [
          { search: '__API_BASE_PATH__', replace: API_BASE_URL },
          { search: '__STATIC_PATH__', replace: process.env.ENV === 'development' ? STATIC_PATH_LOCAL : STATIC_PATH },
          { search: '__GT_CORE__', replace: GT_CORE },
          { search: '__DEBUG__', replace: DEBUG },
          { search: '__RELEASE__', replace: `${process.env.ENV}-${new Date().toLocaleString()}\\nAPI: ${API_BASE_URL}\\nCORE: ${GT_CORE}\\nSTATIC: ${STATIC_PATH}` }
        ].map(item => ({ ...item, flags: 'g' }))
      })
      .end()

    config.module
      .rule('js')
      .test(/\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    const ofs = ['vue-modules', 'vue', 'normal-modules', 'normal']
    const cssRules = config.module.rule('scss')

    const addSassResourcesLoader = (rules, type) => {
      rules
        .oneOf(type)
        .use('sass-resoureces-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [resolve('src/assets/css/index.scss')] // your resource file or patterns
        })
    }
    ofs.forEach(type => {
      addSassResourcesLoader(cssRules, type)
    })

    config.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'))

    config.plugin('html').tap(args => {
      args[0].inject = false
      args[0].templateParameters = function(compilation, assets, options) {
        return {
          files: assets,
          options: options,
          webpackConfig: compilation.options,
          webpack: compilation.getStats().toJson()
        }
      }
      return args
    })

    config.when(process.env.NODE_ENV !== 'development', config => {
      config.plugin('extract-css').tap(args => {
        args[0].filename = 'static/css/[name].css'
        args[0].chunkFilename = 'static/css/[name].css'
        return args
      })
      config.plugin('html').tap(args => {
        args[0].minify.removeAttributeQuotes = false
        return args
      })
    })
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.module.rule('vue').uses.delete('cache-loader')
      config.module.rule('js').uses.delete('cache-loader')
      // config
      //   .plugin('ScriptExtHtmlWebpackPlugin')
      //   .after('html')
      //   .use('script-ext-html-webpack-plugin', [
      //     {
      //       // `runtime` must same as runtimeChunk name. default is `runtime`
      //       inline: /runtime.js$/
      //     }
      //   ])
      //   .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          ui: {
            name: 'ui', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
