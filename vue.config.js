//正式发布文件地址设置
const BASE_URL = process.env.NODE_ENV === 'production' ? '/dist' : '/'

module.exports = {
  publicPath: BASE_URL,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
