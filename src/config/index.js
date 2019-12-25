const AppConfig = {
  version: 'v1.0.0',
  browser: null,
  localhost: '', //接口地址前缀
  // isApp: process.env.VUE_APP_isAppEnv === 'yes', // app环境
  // updateTime: '2019/6/18 下午3:00:05', // 格式:new Date().toLocaleString()
  apiTimeout: 20000, // 接口超时时间(单位:ms)
}

export default AppConfig

// api列表
export const apiUrl = (() => {
  url = {}

  Object.keys(url).forEach(key => (url[key] = AppConfig.localhost + url[key]))
})

function initApp () {
  if (window.navigator && window.navigator.userAgent) {
    const ua = window.navigator.userAgent
    AppConfig.isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1
    AppConfig.isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

    if (ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i)[0].toLocaleLowerCase() === 'micromessenger') {
      // 微信浏览器
      AppConfig.isWeiXin = true
    } else if (ua.match(/UCWEB/i) || ua.match(/UCBrowser/i)) {
      // uc浏览器
      // TODO:未经过测试
      AppConfig.browser = 'UC'
    } else if (ua.match(/MQQBrowser/i)) {
      // qq浏览器
      // TODO:未经过测试
      AppConfig.browser = 'QQ'
    } else if (ua.match(/FxiOS/i) || ua.match(/Firefox/i)) {
      // 火狐浏览器
      // TODO:未经过测试
      AppConfig.browser = 'FireFox'
    } else if (ua.match(/MSIE/i) || ua.match(/IEMobile/i)) {
      // IE浏览器
      // TODO:未经过测试
      AppConfig.browser = 'IE'
    } else if (ua.match(/Chrome/i)) {
      // 谷歌浏览器
      AppConfig.browser = 'Chrome'
    }
  }
}
initApp()

export default AppConfig