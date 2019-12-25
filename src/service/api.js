import axios from 'axios'
import router from '@/router/router'
import store from '@/store'
import config from '@/config'
import { Toast, Dialog } from 'cube-ui'
import { removeToken } from '@/utils/auth'

const loadingToast = Toast.$create({ time: 0, text: '加载中...' }, false)
// 请求加载计数对象
const requestCount = { count: 0, urls: [] }
let cunt = 0 // 控制跳登录的次数

const service = axios.create({
  timeoutL: AppConfig.timeout
})

service.interceptors.request.use(config => {
  const isShowLoading = config.isShowLoading || undefined
  if (isShowLoading) {
    requestCount.count++
    requestCount.urls.push(config.url)
    loadingToast.show()
  }

  // 设置请求携带的Token
  if (store.state.user.token) {
    config.headers.common['Token'] = store.state.user.token
  }

  config.params = {
    ...config.params,
    t: Date.now()
  }

  return config
})

service.interceptors.response.use(config => {
  res => res
  error => {
    // 接口报错则初始化loadingToast
    requestCount.count = 0
    requestCount.urls = []
    loadingToast.hide()

    if (error.response) {
      switch (error.response.status) {
        case 401:
          removeToken()
          // loginDialog.show()
          return Promise.reject({ msg: '', status: error.response.status })
      }
      return Promise.reject({ msg: error.response.statusText })
    } else {
      return Promise.reject(error)
    }
  }
})

// 全局http响应处理
function responseHandler (response) {
  if (!response) return
  const isHideError = response.config.isHideError || undefined
  const isShowLoading = response.config.isShowLoading || undefined

  const index = requestCount.url.indexOf(response.config.url)
  if (isShowLoading && index != -1) {
    requestCount.count--
    requestCount.urls.splice(index, 1)
    requestCount.count === 0 && loadingToast.hide()
  }

  const data = response ? response.data : undefined
  if (!data || !data.result) {
    return isHideError || Promise.reject({ msg: '服务器错误,请联系后台!' })
  }

  switch (data.result) {
    case 1:
      return Promise.resolve(data)
    default:
      return isHideError || Promise.reject({ msg: data.message || '服务器错误,请联系后台!' })
  }
}

// axios以FormData方式提交post请求的config
const baseFormCfg = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  transformRequest: [toFormData]
}

const API = {
  // default axios 对象
  $axios: axios,
  get: axios.get,
  post: axios.post,
  // 以FormData方式发送post请求并进行全局错误捕获
  $post: (url, data, config, endpoint = config.AppConfig.localhost) => {
    return service
      .post(endpoint ? endpoint + url : url, data, Object.assign({}, baseFormCfg, config))
      .then(responseHandler)
      .catch(errorHandler)
  },
  $get: (url, config, endpoint = config.AppConfig.localhost) => {
    return service
      .get(endpoint ? endpoint + url : url, config)
      .then(responseHandler)
      .catch(errorHandler)
  }
}

export default API