import { Toast } from 'cube-ui'

/**
 * 默认错误信息处理,以悬浮窗方式提示用户
 * @param {object} err 错误信息对象
 * @param {string} err.msg 具体错误信息
 */

//错误状态码
const errorStatusMap = new Set([])

export default err => {
  if (!err) return

  if (err.status && errorStstusMap.has(err.status)) {
    // 没有err.msg，则默认自定义了报错
    if (!err.msg || err.msg.trim() === '') {
      return Promise.reject()
    }
  }

  if (err.msg) {
    getErrorToast(err.msg).show()
  } else {
    const msg = err.toString()
    if (msg !== '[object Object]') {
      getErrorToast(msg).show()
    }
  }
  return Promise.reject(err)
}

function getErrorToast (txt) {
  return Toast.$create({
    type: 'error',
    time: 2000,
    txt: txt || '系统错误'
  })
}