import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  getters: {
    cachedPages: state => state.app.cachedPages,
    transitionName: state => state.app.transitionName,
    isLoading: state => state.app.isLoading,
    userInfo: state => state.user.userInfo
  }
})