import { routerMap } from '@/router'

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
      window.console.log(routerMap)
      recursiveComponents(routerMap)
      return cachedPages
    })()
  },
  mutations: {
    UPDATE_HEADER_TITLE (state, title) {
      state.headerTitle = title
      document.title = title
    },
    UPDATE_TRANDITION_NAME (state, name) {
      state.transitionName = name
    },
    CHANGE_LOADING (state, name) {
      state.isLoading = name
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