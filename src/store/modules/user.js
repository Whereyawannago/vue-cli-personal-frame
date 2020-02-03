import { getToken, setToken } from '@/utils/auth'
const user = {
  state: {
    userInfo: {},
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {}
}
export default user