import { constantRouterMap } from '@/router/router'

const app = {
  state: {
    headerTitle: '',
    transitionName: 'slide-left',
    cachedPages: (function () {
      let cachedPages = []
      function recursiveComponents (componentsList) {
        if (componentsList.length === 0) return
        for (let components of componentsList) {
          if (components.meta && components.meta.cache) {
            cachedPages.push(components.name)
          }
        }
      }
      recursiveComponents(constantRouterMap)
      return cachedPages
    })()
  },
  mutations: {
    UPDATE_HEADER_TITLE (state, title) {
      // TODO:增加app header title修改
      state.headerTitle = title
      document.title = title
    },
    UPDATE_TRANDITION_NAME (state, name) {
      state.transitionName = name
    }
  },
  actions: {
    updateHeaderTitle ({ commit }, title) {
      commit('UPDATE_HEADER_TITLE', title)
    },
    updateTransitionName ({ commit }, name) {
      commit('UPDATE_TRANDITION_NAME', name)
    }
  }
}

export default app