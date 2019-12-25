import store from '@/store'
import router from '@/router/router'

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
  window[mthod].removeItem(key)
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