import { apiUrl } from '../config'
import API from './api'

/**
 * 用户登录
 * @param {String} code 页面返回code
 */
const userLogin = ({ code }) => API.$wxPost(apiUrl.wxUserLogin, { code })

export default {
  userLogin
}