import { getStore, setStore, removeStore } from './utils'
// import { TOKEN_KEY } from '@/config/constant'

const TOKEN_KEY = 'userToken'
// const TOKEN_KEY = 'yy_token'

export function getToken () {
  return getStore(TOKEN_KEY)
}

export function setToken (token) {
  return setStore(TOKEN_KEY, token)
}

export function removeToken () {
  return removeStore(TOKEN_KEY)
}