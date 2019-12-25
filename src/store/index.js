import Vue from 'vue'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  module: {
    user
  },
  getters: {}
})