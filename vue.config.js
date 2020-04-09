const mockServer = require('./mock/server')

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  integrity: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'OwlTing Interview'
        return args
      })
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')
        ]
      }
    }
  },
  devServer: {
    port: 8080,
    disableHostCheck: true,
    before: mockServer
  }
}
