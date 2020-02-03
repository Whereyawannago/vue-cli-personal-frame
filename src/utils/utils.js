// import store from '@/store'
// import router from '@/router/router'

/**
 * 存储store
 * @param {string}  key
 * @param {string|Object} val
 * @param {string} method 'localStorage | sessionStorage'
 */
export const setStore = (key, val, method = 'localStorage') => {
  if (!key) return
  if (typeof val !== 'string') {
    val = JSON.stringify(val)
  }
  window[method].setItem(key, val)
}

/**
 * 获取store
 * @param {string} key
 * @return {string | null}
 */
export const getStore = (key, val, method = 'localStorage') => {
  return window[method].getItem(key)
}

/**
 * 移除store
 * @param {string} key
 */
export const removeStore = (key, method = 'localStorage') => {
  if (!key) return
  window[method].removeItem(key)
}

/**
 * 获取urlquery
 * @param {string} url
 */
export function getQueryObject (url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.indexOf('?') + 1)
  const obj = {}
  // const reg = /([^?&=]+)=([^?&=]*)/g
  const reg = /([^?&=]+)=([^&]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * url添加参数
 * @param {string} url
 * @param {function} key
 * @param {function} value
 *
 */
export function addUrlParam (url, key, value) {
  let str = ''
  if (url.indexOf('?') !== -1) str = url.substr(url.indexOf('?') + 1)
  else return url + '?' + key + '=' + value
  let returnurl = ''
  let setparam = ''
  let arr
  let modify = '0'

  if (str.indexOf('&') !== -1) {
    arr = str.split('&')

    for (let i in arr) {
      if (arr[i].split('=')[0] === key) {
        setparam = value
        modify = '1'
      } else {
        setparam = arr[i].split('=')[1]
      }
      returnurl = returnurl + arr[i].split('=')[0] + '=' + setparam + '&'
    }

    returnurl = returnurl.substr(0, returnurl.length - 1)

    if (modify === '0') if (returnurl === str) returnurl = returnurl + '&' + key + '=' + value
  } else {
    if (str.indexOf('=') !== -1) {
      arr = str.split('=')

      if (arr[0] === key) {
        setparam = value
        modify = '1'
      } else {
        setparam = arr[1]
      }
      returnurl = arr[0] + '=' + setparam
      if (modify === '0') if (returnurl === str) returnurl = returnurl + '&' + key + '=' + value
    } else returnurl = key + '=' + value
  }
  return url.substr(0, url.indexOf('?')) + '?' + returnurl
}

/**
 * formData模式上传参数
 * @param {string} url
 */
export function toFormData (data) {
  let ret = ''
  for (let it in data) {
    if (data[it] === '' || data[it] === undefined) continue
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret.substring(0, ret.length - 1)
}
